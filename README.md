# ColorBook SaaS - AI-Powered Coloring Book Generator

Create beautiful coloring book pages with AI. Generate personalized coloring pages for yourself and your kids with our AI-powered platform.

[![ColorBook SaaS Demo](https://img.youtube.com/vi/qsRNpR5uPUM/0.jpg)](https://www.youtube.com/watch?v=qsRNpR5uPUM)

## Features

- 🎨 AI-powered coloring page generation
- 🔐 Authentication with Google OAuth
- 💳 Credit system for generations
- 📊 User dashboard
- 🎯 Clean, minimalist UI
- ⚡ Built with Next.js 14 App Router

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **Authentication**: Google OAuth
- **Styling**: Tailwind CSS, DaisyUI

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Supabase account
- Google Cloud Console account (for OAuth)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/nexty5870/ColoringBook-YouTube
   cd colorbook-saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

   # Optional: Analytics, etc.
   NEXT_PUBLIC_GOOGLE_ANALYTICS=your_ga_id
   ```

4. **Supabase Setup**

   a. Create Project:
   - Go to [Supabase](https://supabase.com)
   - Create new project
   - Save your database password!

   b. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

   c. Link Project:
   ```bash
   supabase login
   supabase link --project-ref your-project-ref
   ```

   d. Run Migrations:
   ```bash
   supabase db push
   ```

   e. Enable Google OAuth:
   - Go to Supabase Dashboard -> Authentication -> Providers
   - Enable Google provider
   - Create OAuth 2.0 credentials in [Google Cloud Console](https://console.cloud.google.com)
   - Add these URLs to your Google OAuth settings:
     * Authorized JavaScript origins: `https://your-project-url`
     * Authorized redirect URIs: `https://your-project-url/auth/v1/callback`
   - Copy Client ID and Secret to Supabase Google provider settings

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The project uses the following main tables:
- `users`: User profiles
- `user_credits`: Credit management
- `generations`: Coloring page generations
- `coloring_books`: Collections of generated pages

Migrations will set up:
- Row Level Security (RLS) policies
- Triggers for credit management
- Required indexes and relationships

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   ├── signin/           # Auth pages
│   └── page.tsx          # Landing page
├── components/            # React components
├── providers/            # Auth & context providers
├── public/              # Static assets
└── supabase/            # Database migrations
```

## Authentication Flow

1. User clicks "Sign in with Google"
2. After Google auth, redirected to `/api/auth/callback`
3. Callback exchanges code for session
4. User redirected to dashboard
5. New users get initial credits automatically

## Common Issues & Solutions

1. **404 after Google Login**
   - Check your OAuth redirect URIs
   - Verify callback route is properly set up

2. **Missing Credits**
   - Run migrations to set up credit system
   - Check RLS policies

3. **Database Migration Fails**
   - Run `supabase db reset` to start fresh
   - Check Supabase dashboard for error logs

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this template for your own projects!

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Authentication by [Supabase](https://supabase.com)
- UI components from [DaisyUI](https://daisyui.com/)
