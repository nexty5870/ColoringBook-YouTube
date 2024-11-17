-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create enum for generation status
CREATE TYPE public.generation_status AS ENUM ('pending', 'completed', 'failed');

-- Create users table if not exists (this extends the auth.users table)
CREATE TABLE IF NOT EXISTS public.users (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    email TEXT NOT NULL,
    credits INTEGER DEFAULT 0,
    total_generations INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create credit transactions table
CREATE TABLE IF NOT EXISTS public.credit_transactions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) NOT NULL,
    amount INTEGER NOT NULL, -- Positive for additions, negative for usage
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    source TEXT -- e.g., 'purchase', 'generation', 'bonus'
);

-- Create generations table for tracking coloring book generations
CREATE TABLE IF NOT EXISTS public.generations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) NOT NULL,
    prompt TEXT NOT NULL,
    status generation_status DEFAULT 'pending',
    image_url TEXT,
    credits_used INTEGER DEFAULT 1,
    error TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE
);

-- Create function to add credits
CREATE OR REPLACE FUNCTION public.add_credits(
    user_id UUID,
    credit_amount INTEGER,
    credit_source TEXT DEFAULT 'manual'
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Update user credits
    UPDATE public.users 
    SET 
        credits = credits + credit_amount,
        updated_at = NOW()
    WHERE id = user_id;

    -- Record the transaction
    INSERT INTO public.credit_transactions (
        user_id,
        amount,
        source,
        description
    ) VALUES (
        user_id,
        credit_amount,
        credit_source,
        CASE 
            WHEN credit_amount > 0 THEN 'Credit addition'
            ELSE 'Credit usage'
        END
    );
END;
$$;

-- Create function to use credits
CREATE OR REPLACE FUNCTION public.use_credits(
    user_id UUID,
    credit_amount INTEGER DEFAULT 1
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    current_credits INTEGER;
BEGIN
    -- Get current credits
    SELECT credits INTO current_credits
    FROM public.users
    WHERE id = user_id;

    -- Check if user has enough credits
    IF current_credits >= credit_amount THEN
        -- Update user credits
        UPDATE public.users 
        SET 
            credits = credits - credit_amount,
            total_generations = total_generations + 1,
            updated_at = NOW()
        WHERE id = user_id;

        -- Record the transaction
        INSERT INTO public.credit_transactions (
            user_id,
            amount,
            source,
            description
        ) VALUES (
            user_id,
            -credit_amount,
            'generation',
            'Credit used for generation'
        );

        RETURN true;
    ELSE
        RETURN false;
    END IF;
END;
$$;

-- Set up row level security (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credit_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.generations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own data" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can view own transactions" ON public.credit_transactions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view own generations" ON public.generations
    FOR SELECT USING (auth.uid() = user_id);

-- Create trigger to update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();
