-- Add total_generations column to users table if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                  WHERE table_schema = 'public' 
                  AND table_name = 'users' 
                  AND column_name = 'total_generations') THEN
        ALTER TABLE public.users ADD COLUMN total_generations INTEGER DEFAULT 0;
    END IF;
END $$;

-- Drop and recreate the use_credits function with better error handling
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
    IF COALESCE(current_credits, 0) >= credit_amount THEN
        -- Update user credits
        UPDATE public.users 
        SET 
            credits = COALESCE(credits, 0) - credit_amount,
            total_generations = COALESCE(total_generations, 0) + 1,
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
EXCEPTION
    WHEN OTHERS THEN
        -- Log the error (will appear in Supabase logs)
        RAISE NOTICE 'Error in use_credits: %', SQLERRM;
        RETURN false;
END;
$$;

-- Grant necessary permissions
GRANT EXECUTE ON FUNCTION public.use_credits(UUID, INTEGER) TO authenticated;

-- Ensure RLS policies allow the function to work
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credit_transactions ENABLE ROW LEVEL SECURITY;

-- Update RLS policies
DROP POLICY IF EXISTS "Users can be updated by system" ON public.users;
CREATE POLICY "Users can be updated by system"
ON public.users
FOR UPDATE
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "System can create transactions" ON public.credit_transactions;
CREATE POLICY "System can create transactions"
ON public.credit_transactions
FOR INSERT
WITH CHECK (true);

-- Reset credits for testing (optional, comment out if not needed)
UPDATE public.users SET credits = 10 WHERE credits IS NULL;
