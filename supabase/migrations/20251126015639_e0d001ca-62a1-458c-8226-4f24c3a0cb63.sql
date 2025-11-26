-- Create applications table
CREATE TABLE public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID REFERENCES public.jobs(id) ON DELETE CASCADE NOT NULL,
  candidate_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  status TEXT DEFAULT 'pending' NOT NULL CHECK (status IN ('pending', 'reviewing', 'interview', 'accepted', 'rejected')),
  cover_letter TEXT,
  resume_url TEXT,
  candidate_notes TEXT,
  recruiter_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(job_id, candidate_id)
);

-- Enable RLS
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX idx_applications_job_id ON public.applications(job_id);
CREATE INDEX idx_applications_candidate_id ON public.applications(candidate_id);
CREATE INDEX idx_applications_status ON public.applications(status);
CREATE INDEX idx_applications_created_at ON public.applications(created_at DESC);

-- RLS Policies for applications

-- Candidates can view their own applications
CREATE POLICY "Candidates can view their own applications"
ON public.applications
FOR SELECT
TO authenticated
USING (auth.uid() = candidate_id);

-- Candidates can create applications (only for approved jobs)
CREATE POLICY "Candidates can create applications"
ON public.applications
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = candidate_id
  AND EXISTS (
    SELECT 1 FROM public.jobs
    WHERE jobs.id = job_id
    AND jobs.status = 'approved'
  )
);

-- Candidates can update their own pending applications
CREATE POLICY "Candidates can update their pending applications"
ON public.applications
FOR UPDATE
TO authenticated
USING (
  auth.uid() = candidate_id
  AND status = 'pending'
);

-- Recruiters can view applications for their jobs
CREATE POLICY "Recruiters can view applications for their jobs"
ON public.applications
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.jobs
    WHERE jobs.id = applications.job_id
    AND jobs.recruiter_id = auth.uid()
  )
);

-- Recruiters can update applications for their jobs
CREATE POLICY "Recruiters can update applications for their jobs"
ON public.applications
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.jobs
    WHERE jobs.id = applications.job_id
    AND jobs.recruiter_id = auth.uid()
  )
);

-- Admins can view all applications
CREATE POLICY "Admins can view all applications"
ON public.applications
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admins can update all applications
CREATE POLICY "Admins can update all applications"
ON public.applications
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add trigger for updated_at
CREATE TRIGGER update_applications_updated_at
BEFORE UPDATE ON public.applications
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Enable realtime for applications
ALTER TABLE public.applications REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.applications;