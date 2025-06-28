/*
  # TaskSher Database Schema Migration

  1. New Tables
    - `profiles`: User profile information with subscription details
      - Links to `auth.users` with cascade delete
      - Tracks subscription plan, credits, and usage limits
      - Includes avatar and contact information

    - `automations`: User-configured automation workflows
      - References `profiles` for user ownership
      - Stores automation type, configuration, and status
      - JSONB configuration for flexible automation settings

    - `tasks`: Individual automation execution records
      - Links to both `profiles` and `automations`
      - Tracks execution status, timing, and results
      - Stores input/output data and error information

    - `integrations`: Third-party service configurations
      - User-specific API keys and service settings
      - JSONB configuration for flexible integration data
      - Unique constraint on user_id + service_name

    - `usage_logs`: Analytics and billing tracking
      - Records automation usage for billing purposes
      - Links to user profiles for usage aggregation

  2. Security
    - Enables Row Level Security (RLS) on all tables
    - Implements comprehensive policies for user data isolation
    - Users can only access their own data

  3. Automation
    - Trigger function for automatic profile creation on user signup
    - Updated timestamp triggers for data consistency
    - Proper foreign key relationships with cascade deletes
*/

-- Create enum types with IF NOT EXISTS equivalent using DO blocks
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'automation_type') THEN
        CREATE TYPE public.automation_type AS ENUM ('email_reply', 'newsletter', 'notion_task');
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'task_status') THEN
        CREATE TYPE public.task_status AS ENUM ('pending', 'processing', 'completed', 'failed');
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'subscription_plan') THEN
        CREATE TYPE public.subscription_plan AS ENUM ('free', 'pro');
    END IF;
END $$;

-- User profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  subscription_plan subscription_plan DEFAULT 'free',
  subscription_id TEXT,
  credits_used INTEGER DEFAULT 0,
  credits_limit INTEGER DEFAULT 50,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Automations table - stores user's configured automations
CREATE TABLE IF NOT EXISTS public.automations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type automation_type NOT NULL,
  is_active BOOLEAN DEFAULT true,
  configuration JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tasks table - stores individual automation executions
CREATE TABLE IF NOT EXISTS public.tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  automation_id UUID REFERENCES public.automations(id) ON DELETE CASCADE,
  status task_status DEFAULT 'pending',
  input_data JSONB,
  output_data JSONB,
  error_message TEXT,
  processing_time INTEGER, -- in milliseconds
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- Integration settings table - stores API keys and configurations
CREATE TABLE IF NOT EXISTS public.integrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  service_name TEXT NOT NULL,
  configuration JSONB NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add unique constraint if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'integrations_user_id_service_name_key' 
        AND table_name = 'integrations'
    ) THEN
        ALTER TABLE public.integrations ADD CONSTRAINT integrations_user_id_service_name_key UNIQUE(user_id, service_name);
    END IF;
END $$;

-- Usage logs table - for analytics and billing
CREATE TABLE IF NOT EXISTS public.usage_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  automation_type automation_type NOT NULL,
  credits_consumed INTEGER DEFAULT 1,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on all tables (safe to run multiple times)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usage_logs ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist, then recreate them
DO $$
BEGIN
    -- Profiles policies
    DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
    DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
    
    CREATE POLICY "Users can view own profile" ON public.profiles
      FOR SELECT USING (auth.uid() = id);
    
    CREATE POLICY "Users can update own profile" ON public.profiles
      FOR UPDATE USING (auth.uid() = id);

    -- Automations policies
    DROP POLICY IF EXISTS "Users can view own automations" ON public.automations;
    DROP POLICY IF EXISTS "Users can create own automations" ON public.automations;
    DROP POLICY IF EXISTS "Users can update own automations" ON public.automations;
    DROP POLICY IF EXISTS "Users can delete own automations" ON public.automations;
    
    CREATE POLICY "Users can view own automations" ON public.automations
      FOR SELECT USING (auth.uid() = user_id);
    
    CREATE POLICY "Users can create own automations" ON public.automations
      FOR INSERT WITH CHECK (auth.uid() = user_id);
    
    CREATE POLICY "Users can update own automations" ON public.automations
      FOR UPDATE USING (auth.uid() = user_id);
    
    CREATE POLICY "Users can delete own automations" ON public.automations
      FOR DELETE USING (auth.uid() = user_id);

    -- Tasks policies
    DROP POLICY IF EXISTS "Users can view own tasks" ON public.tasks;
    DROP POLICY IF EXISTS "Users can create own tasks" ON public.tasks;
    
    CREATE POLICY "Users can view own tasks" ON public.tasks
      FOR SELECT USING (auth.uid() = user_id);
    
    CREATE POLICY "Users can create own tasks" ON public.tasks
      FOR INSERT WITH CHECK (auth.uid() = user_id);

    -- Integrations policies
    DROP POLICY IF EXISTS "Users can view own integrations" ON public.integrations;
    DROP POLICY IF EXISTS "Users can manage own integrations" ON public.integrations;
    
    CREATE POLICY "Users can view own integrations" ON public.integrations
      FOR SELECT USING (auth.uid() = user_id);
    
    CREATE POLICY "Users can manage own integrations" ON public.integrations
      FOR ALL USING (auth.uid() = user_id);

    -- Usage logs policies
    DROP POLICY IF EXISTS "Users can view own usage logs" ON public.usage_logs;
    
    CREATE POLICY "Users can view own usage logs" ON public.usage_logs
      FOR SELECT USING (auth.uid() = user_id);
END $$;

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists, then recreate
DO $$
BEGIN
    DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
    
    CREATE TRIGGER on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
END $$;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing triggers if they exist, then recreate
DO $$
BEGIN
    DROP TRIGGER IF EXISTS update_profiles_updated_at ON public.profiles;
    DROP TRIGGER IF EXISTS update_automations_updated_at ON public.automations;
    DROP TRIGGER IF EXISTS update_integrations_updated_at ON public.integrations;
    
    CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
      FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
    
    CREATE TRIGGER update_automations_updated_at BEFORE UPDATE ON public.automations
      FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
    
    CREATE TRIGGER update_integrations_updated_at BEFORE UPDATE ON public.integrations
      FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
END $$;