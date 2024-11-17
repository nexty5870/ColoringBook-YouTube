-- Enable RLS on generations table
ALTER TABLE public.generations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Users can view own generations" ON public.generations;
DROP POLICY IF EXISTS "Users can create own generations" ON public.generations;
DROP POLICY IF EXISTS "Users can update own generations" ON public.generations;

-- Create policies for generations table
CREATE POLICY "Users can view own generations"
ON public.generations
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create own generations"
ON public.generations
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own generations"
ON public.generations
FOR UPDATE
USING (auth.uid() = user_id);

-- Also add policies for credit_transactions while we're at it
ALTER TABLE public.credit_transactions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Users can view own transactions" ON public.credit_transactions;
DROP POLICY IF EXISTS "Users can create own transactions" ON public.credit_transactions;

-- Create policies for credit_transactions table
CREATE POLICY "Users can view own transactions"
ON public.credit_transactions
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create own transactions"
ON public.credit_transactions
FOR INSERT
WITH CHECK (auth.uid() = user_id);
