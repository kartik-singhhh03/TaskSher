# Git Setup and GitHub Deployment Guide

## Prerequisites
- Git installed on your system
- GitHub account
- Your project files ready

## Step 1: Initialize Git Repository (if not already done)

```bash
# Navigate to your project directory
cd /path/to/your/project

# Initialize git repository
git init

# Add all files to staging
git add .

# Make your first commit
git commit -m "Initial commit: TaskSher AI-powered virtual assistant"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in repository details:
   - Repository name: `tasksher-app` (or your preferred name)
   - Description: "AI-powered virtual assistant for solopreneurs"
   - Choose Public or Private
   - Don't initialize with README (since you already have files)
5. Click "Create repository"

## Step 3: Connect Local Repository to GitHub

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Verify remote was added
git remote -v

# Push your code to GitHub
git push -u origin main
```

## Step 4: For Future Changes (Daily Workflow)

```bash
# Check status of your files
git status

# Add specific files or all changes
git add .
# OR add specific files:
# git add src/pages/Integrations.tsx

# Commit your changes with a descriptive message
git commit -m "Fix JSX syntax error in Integrations page"

# Push changes to GitHub
git push origin main
```

## Step 5: Common Git Commands

### Checking Status
```bash
# See what files have changed
git status

# See detailed changes
git diff

# See commit history
git log --oneline
```

### Branching (Recommended for features)
```bash
# Create and switch to new branch
git checkout -b feature/new-feature-name

# Switch between branches
git checkout main
git checkout feature/new-feature-name

# Merge branch back to main
git checkout main
git merge feature/new-feature-name

# Delete branch after merging
git branch -d feature/new-feature-name
```

### Undoing Changes
```bash
# Undo changes to a file (before staging)
git checkout -- filename.txt

# Unstage a file
git reset HEAD filename.txt

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

## Step 6: Setting Up GitHub Pages (Optional - for frontend only)

If you want to deploy your frontend to GitHub Pages:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

Note: This only works for static sites. For full-stack apps, you'll need other deployment options.

## Step 7: Environment Variables for Production

Create a `.env.example` file to show what environment variables are needed:

```bash
# Create example environment file
touch .env.example
```

Add to `.env.example`:
```
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key_here
VITE_RAZORPAY_KEY_ID=your_razorpay_key_here
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id_here
```

## Step 8: Deployment Options

### Option 1: Netlify (Recommended for Frontend)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Option 2: Vercel
1. Connect GitHub repository to Vercel
2. Vercel auto-detects Vite projects
3. Add environment variables in Vercel dashboard

### Option 3: GitHub Actions (CI/CD)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build project
      run: npm run build
      env:
        VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
        VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
        
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod --dir=dist
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Step 9: Best Practices

### Commit Message Conventions
```bash
# Feature additions
git commit -m "feat: add payment integration with Stripe"

# Bug fixes
git commit -m "fix: resolve JSX syntax error in Integrations page"

# Documentation
git commit -m "docs: update deployment guide"

# Styling
git commit -m "style: improve responsive design for mobile"

# Refactoring
git commit -m "refactor: reorganize component structure"
```

### .gitignore File
Make sure you have a proper `.gitignore`:

```
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production builds
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port
```

## Step 10: Quick Commands for Your Current Situation

Since you just fixed the JSX syntax error, here's what to run now:

```bash
# Add the fixed file
git add src/pages/Integrations.tsx

# Commit the fix
git commit -m "fix: resolve JSX syntax error in Integrations page"

# Push to GitHub
git push origin main
```

## Troubleshooting

### If you get authentication errors:
```bash
# Set up GitHub credentials
git config --global user.name "Kartik Singh"
git config --global user.email "contactsweatandcode@gmail.com"

# Use personal access token instead of password
# Go to GitHub Settings > Developer settings > Personal access tokens
# Generate new token and use it as password when prompted
```

### If you get merge conflicts:
```bash
# Pull latest changes first
git pull origin main

# Resolve conflicts in your editor
# Then add and commit
git add .
git commit -m "resolve merge conflicts"
git push origin main
```

## Contact Information

If you need help with deployment:
- Email: contactsweatandcode@gmail.com
- GitHub: Create an issue in your repository

Remember to never commit sensitive information like API keys, passwords, or personal data to your repository!