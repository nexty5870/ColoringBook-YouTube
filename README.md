# Minimal SaaS Template with Authentication and Dashboard

A streamlined Next.js application template featuring authentication and a basic dashboard. Perfect for quickly bootstrapping your SaaS project with essential features.

## Features

- 🔐 Authentication with Supabase
- 📊 Protected Dashboard Route
- 🎨 Styled with Tailwind CSS
- ⚡ Built with Next.js 13+ App Router

## Prerequisites

- Node.js 16.8 or later
- npm or yarn
- Supabase account

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd [your-repo-name]
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Fill in the following required environment variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Supabase Setup**
   - Create a new project on [Supabase](https://supabase.com)
   - Enable Authentication and copy your project URL and anon key
   - Add them to your `.env.local` file

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── dashboard/     # Dashboard pages
│   ├── signin/        # Authentication pages
│   └── page.tsx       # Landing page
├── components/        # React components
├── providers/         # Auth providers
└── lib/              # Utility functions
```

## Authentication Flow

1. Users can sign in from the landing page
2. After successful authentication, they are redirected to the dashboard
3. The dashboard route is protected and requires authentication

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this template for your own projects!
