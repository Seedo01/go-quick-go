/*
  # Add Dashboard Tables for Farmers and Cooperatives

  1. New Tables
    - `credit_scores`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `score` (integer, 300-850)
      - `grade` (text, A-F)
      - `factors` (jsonb, score calculation factors)
      - `created_at` (timestamptz)
    
    - `loan_applications`
      - `id` (uuid, primary key)
      - `farmer_id` (uuid, foreign key to auth.users)
      - `amount` (numeric, loan amount)
      - `purpose` (text, loan purpose)
      - `status` (text, pending/approved/rejected)
      - `lender_id` (uuid, optional)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `farming_data`
      - `id` (uuid, primary key)
      - `farmer_id` (uuid, foreign key to auth.users)
      - `crop_type` (text)
      - `land_size` (numeric, in hectares)
      - `yield_amount` (numeric)
      - `harvest_date` (date)
      - `created_at` (timestamptz)
    
    - `cooperatives`
      - `id` (uuid, primary key)
      - `name` (text)
      - `registration_number` (text, unique)
      - `contact_email` (text)
      - `address` (text)
      - `created_at` (timestamptz)
    
    - `cooperative_admins`
      - `id` (uuid, primary key)
      - `cooperative_id` (uuid, foreign key to cooperatives)
      - `user_id` (uuid, foreign key to auth.users)
      - `created_at` (timestamptz)
    
    - `cooperative_members`
      - `id` (uuid, primary key)
      - `cooperative_id` (uuid, foreign key to cooperatives)
      - `user_id` (uuid, foreign key to auth.users)
      - `joined_date` (timestamptz)
      - `status` (text, active/inactive)
    
    - `loan_guarantees`
      - `id` (uuid, primary key)
      - `loan_id` (uuid, foreign key to loan_applications)
      - `cooperative_id` (uuid, foreign key to cooperatives)
      - `farmer_name` (text)
      - `amount` (numeric)
      - `status` (text, active/completed/defaulted)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Users can read/write their own data
    - Cooperative admins can read member data
    - Lenders can read loan applications

  3. Important Notes
    - Credit scores are calculated based on multiple factors
    - Cooperatives can guarantee loans for members
    - All sensitive data is protected by RLS
*/

CREATE TABLE IF NOT EXISTS credit_scores (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  score integer NOT NULL CHECK (score >= 300 AND score <= 850),
  grade text NOT NULL,
  factors jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS loan_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  farmer_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  amount numeric NOT NULL CHECK (amount > 0),
  purpose text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  lender_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS farming_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  farmer_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  crop_type text NOT NULL,
  land_size numeric NOT NULL CHECK (land_size > 0),
  yield_amount numeric CHECK (yield_amount >= 0),
  harvest_date date,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS cooperatives (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  registration_number text UNIQUE NOT NULL,
  contact_email text DEFAULT '',
  address text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS cooperative_admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cooperative_id uuid REFERENCES cooperatives(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(cooperative_id, user_id)
);

CREATE TABLE IF NOT EXISTS cooperative_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  cooperative_id uuid REFERENCES cooperatives(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  joined_date timestamptz DEFAULT now(),
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  UNIQUE(cooperative_id, user_id)
);

CREATE TABLE IF NOT EXISTS loan_guarantees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  loan_id uuid REFERENCES loan_applications(id) ON DELETE CASCADE,
  cooperative_id uuid REFERENCES cooperatives(id) ON DELETE CASCADE NOT NULL,
  farmer_name text NOT NULL,
  amount numeric NOT NULL CHECK (amount > 0),
  status text DEFAULT 'active' CHECK (status IN ('active', 'completed', 'defaulted')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE credit_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE loan_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE farming_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE cooperatives ENABLE ROW LEVEL SECURITY;
ALTER TABLE cooperative_admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE cooperative_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE loan_guarantees ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own credit scores"
  ON credit_scores FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own credit scores"
  ON credit_scores FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own loan applications"
  ON loan_applications FOR SELECT
  TO authenticated
  USING (auth.uid() = farmer_id OR auth.uid() = lender_id);

CREATE POLICY "Users can insert own loan applications"
  ON loan_applications FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = farmer_id);

CREATE POLICY "Users can update own loan applications"
  ON loan_applications FOR UPDATE
  TO authenticated
  USING (auth.uid() = farmer_id OR auth.uid() = lender_id)
  WITH CHECK (auth.uid() = farmer_id OR auth.uid() = lender_id);

CREATE POLICY "Users can read own farming data"
  ON farming_data FOR SELECT
  TO authenticated
  USING (auth.uid() = farmer_id);

CREATE POLICY "Users can insert own farming data"
  ON farming_data FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = farmer_id);

CREATE POLICY "Users can update own farming data"
  ON farming_data FOR UPDATE
  TO authenticated
  USING (auth.uid() = farmer_id)
  WITH CHECK (auth.uid() = farmer_id);

CREATE POLICY "Users can delete own farming data"
  ON farming_data FOR DELETE
  TO authenticated
  USING (auth.uid() = farmer_id);

CREATE POLICY "Anyone can read cooperatives"
  ON cooperatives FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert cooperatives"
  ON cooperatives FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can read their admin records"
  ON cooperative_admins FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their admin records"
  ON cooperative_admins FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Members can read their cooperative memberships"
  ON cooperative_members FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id OR 
    EXISTS (
      SELECT 1 FROM cooperative_admins 
      WHERE cooperative_admins.cooperative_id = cooperative_members.cooperative_id 
      AND cooperative_admins.user_id = auth.uid()
    )
  );

CREATE POLICY "Cooperative admins can insert members"
  ON cooperative_members FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM cooperative_admins 
      WHERE cooperative_admins.cooperative_id = cooperative_members.cooperative_id 
      AND cooperative_admins.user_id = auth.uid()
    )
  );

CREATE POLICY "Cooperative admins can update members"
  ON cooperative_members FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM cooperative_admins 
      WHERE cooperative_admins.cooperative_id = cooperative_members.cooperative_id 
      AND cooperative_admins.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM cooperative_admins 
      WHERE cooperative_admins.cooperative_id = cooperative_members.cooperative_id 
      AND cooperative_admins.user_id = auth.uid()
    )
  );

CREATE POLICY "Cooperative admins can read loan guarantees"
  ON loan_guarantees FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM cooperative_admins 
      WHERE cooperative_admins.cooperative_id = loan_guarantees.cooperative_id 
      AND cooperative_admins.user_id = auth.uid()
    )
  );

CREATE POLICY "Cooperative admins can insert loan guarantees"
  ON loan_guarantees FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM cooperative_admins 
      WHERE cooperative_admins.cooperative_id = loan_guarantees.cooperative_id 
      AND cooperative_admins.user_id = auth.uid()
    )
  );

CREATE POLICY "Cooperative admins can update loan guarantees"
  ON loan_guarantees FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM cooperative_admins 
      WHERE cooperative_admins.cooperative_id = loan_guarantees.cooperative_id 
      AND cooperative_admins.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM cooperative_admins 
      WHERE cooperative_admins.cooperative_id = loan_guarantees.cooperative_id 
      AND cooperative_admins.user_id = auth.uid()
    )
  );

CREATE INDEX IF NOT EXISTS idx_credit_scores_user_id ON credit_scores(user_id);
CREATE INDEX IF NOT EXISTS idx_loan_applications_farmer_id ON loan_applications(farmer_id);
CREATE INDEX IF NOT EXISTS idx_loan_applications_lender_id ON loan_applications(lender_id);
CREATE INDEX IF NOT EXISTS idx_farming_data_farmer_id ON farming_data(farmer_id);
CREATE INDEX IF NOT EXISTS idx_cooperative_admins_user_id ON cooperative_admins(user_id);
CREATE INDEX IF NOT EXISTS idx_cooperative_admins_cooperative_id ON cooperative_admins(cooperative_id);
CREATE INDEX IF NOT EXISTS idx_cooperative_members_cooperative_id ON cooperative_members(cooperative_id);
CREATE INDEX IF NOT EXISTS idx_cooperative_members_user_id ON cooperative_members(user_id);
CREATE INDEX IF NOT EXISTS idx_loan_guarantees_cooperative_id ON loan_guarantees(cooperative_id);
