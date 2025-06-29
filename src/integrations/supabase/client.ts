import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Load environment variables (only needed if you're using Node.js)
// For Next.js or modern frameworks, this step can be skipped
import dotenv from 'dotenv';
dotenv.config();

const SUPABASE_URL = "https://obvmuovxf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_JWT as string;

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
