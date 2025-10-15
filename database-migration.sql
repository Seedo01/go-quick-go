/*
  # Create Nigerian User Profiles System

  INSTRUCTIONS:
  1. Go to your Supabase Dashboard: https://0ec90b57d6e95fcbda19832f.supabase.co
  2. Navigate to SQL Editor
  3. Copy and paste this entire SQL script
  4. Click "Run" to execute

  1. New Tables
    - `user_profiles`
      - `id` (uuid, primary key) - links to auth.users
      - `full_name` (text) - User's full name
      - `email` (text) - Email address
      - `phone` (text) - Nigerian phone number (e.g., +234...)
      - `address` (text) - Contact address in Nigeria
      - `bvn` (text) - Bank Verification Number (11 digits)
      - `nin` (text) - National Identification Number
      - `farm_mapping_id` (text) - Farm mapping reference ID
      - `organization` (text) - Organization name
      - `verification_status` (text) - Status of identity verification
      - `bvn_verified` (boolean) - BVN verification status
      - `nin_verified` (boolean) - NIN verification status
      - `farm_verified` (boolean) - Farm mapping verification status
      - `created_at` (timestamptz) - Account creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `user_profiles` table
    - Add policy for users to read their own profile
    - Add policy for users to update their own profile
    - Add policy for users to insert their own profile

  3. Important Notes
    - BVN is stored but should be verified via CBN API
    - NIN should be verified via NIMC API
    - Farm mapping should be verified via NCR API
    - All sensitive data is protected by RLS
*/

CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  address text DEFAULT '',
  bvn text DEFAULT '',
  nin text DEFAULT '',
  farm_mapping_id text DEFAULT '',
  organization text DEFAULT '',
  verification_status text DEFAULT 'pending',
  bvn_verified boolean DEFAULT false,
  nin_verified boolean DEFAULT false,
  farm_verified boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON user_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);
CREATE INDEX IF NOT EXISTS idx_user_profiles_bvn ON user_profiles(bvn);
CREATE INDEX IF NOT EXISTS idx_user_profiles_nin ON user_profiles(nin);
