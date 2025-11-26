-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update roles"
ON public.user_roles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create enum for job status
CREATE TYPE public.job_status AS ENUM ('pending', 'approved', 'rejected');

-- Create jobs table
CREATE TABLE public.jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recruiter_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  company_name TEXT NOT NULL,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  salary TEXT,
  type TEXT NOT NULL, -- Presencial, Remoto, Híbrido
  contract TEXT NOT NULL, -- CLT, PJ, Temporário, Estágio
  description TEXT NOT NULL,
  requirements TEXT,
  benefits TEXT,
  status job_status DEFAULT 'pending' NOT NULL,
  approved_by UUID REFERENCES auth.users(id),
  approved_at TIMESTAMP WITH TIME ZONE,
  rejection_reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS on jobs
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Create index for better query performance
CREATE INDEX idx_jobs_status ON public.jobs(status);
CREATE INDEX idx_jobs_recruiter_id ON public.jobs(recruiter_id);
CREATE INDEX idx_jobs_created_at ON public.jobs(created_at DESC);

-- RLS policies for jobs table

-- Public can view only approved jobs
CREATE POLICY "Anyone can view approved jobs"
ON public.jobs
FOR SELECT
TO anon, authenticated
USING (status = 'approved');

-- Recruiters can view their own jobs (any status)
CREATE POLICY "Recruiters can view their own jobs"
ON public.jobs
FOR SELECT
TO authenticated
USING (auth.uid() = recruiter_id);

-- Admins can view all jobs
CREATE POLICY "Admins can view all jobs"
ON public.jobs
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Recruiters can insert jobs (status will be pending by default)
CREATE POLICY "Recruiters can create jobs"
ON public.jobs
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = recruiter_id 
  AND status = 'pending'
);

-- Recruiters can update their own pending jobs
CREATE POLICY "Recruiters can update their own pending jobs"
ON public.jobs
FOR UPDATE
TO authenticated
USING (
  auth.uid() = recruiter_id 
  AND status = 'pending'
);

-- Admins can update any job (for approval/rejection)
CREATE POLICY "Admins can update any job"
ON public.jobs
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Recruiters can delete their own pending jobs
CREATE POLICY "Recruiters can delete their own pending jobs"
ON public.jobs
FOR DELETE
TO authenticated
USING (
  auth.uid() = recruiter_id 
  AND status = 'pending'
);

-- Admins can delete any job
CREATE POLICY "Admins can delete any job"
ON public.jobs
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Trigger to update updated_at timestamp
CREATE TRIGGER update_jobs_updated_at
BEFORE UPDATE ON public.jobs
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();