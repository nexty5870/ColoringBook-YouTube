-- First, let's make sure our handle_new_user function handles conflicts
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, credits, full_name, avatar_url, created_at)
  VALUES (
    NEW.id,
    NEW.email,
    10, -- Starting credits for new users
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.created_at
  )
  ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    full_name = EXCLUDED.full_name,
    avatar_url = EXCLUDED.avatar_url,
    credits = CASE 
      WHEN public.users.credits IS NULL THEN 10 
      ELSE public.users.credits 
    END;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Make sure RLS is configured correctly
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Users can view own data" ON public.users;
DROP POLICY IF EXISTS "Users can update own data" ON public.users;

-- Create comprehensive policies
CREATE POLICY "Users can view own data" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON public.users
    FOR UPDATE USING (auth.uid() = id);

-- Insert existing auth users into public.users
INSERT INTO public.users (id, email, credits, created_at)
SELECT 
    id,
    email,
    10,
    created_at
FROM auth.users
ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    credits = CASE 
      WHEN public.users.credits IS NULL THEN 10 
      ELSE public.users.credits 
    END;
