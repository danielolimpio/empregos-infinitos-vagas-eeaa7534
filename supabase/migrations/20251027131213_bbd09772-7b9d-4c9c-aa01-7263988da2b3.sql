-- Adicionar colunas necessárias para perfil de candidato
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS city text,
ADD COLUMN IF NOT EXISTS country text,
ADD COLUMN IF NOT EXISTS profession text,
ADD COLUMN IF NOT EXISTS status text,
ADD COLUMN IF NOT EXISTS bio text,
ADD COLUMN IF NOT EXISTS salary_expectation text,
ADD COLUMN IF NOT EXISTS seniority text,
ADD COLUMN IF NOT EXISTS skills text[],
ADD COLUMN IF NOT EXISTS portfolio jsonb,
ADD COLUMN IF NOT EXISTS experiences jsonb;

-- Adicionar colunas necessárias para perfil de recrutador/empresa
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS location text,
ADD COLUMN IF NOT EXISTS description text,
ADD COLUMN IF NOT EXISTS seals text[],
ADD COLUMN IF NOT EXISTS email text,
ADD COLUMN IF NOT EXISTS phone text;

-- Criar bucket para avatares
INSERT INTO storage.buckets (id, name, public)
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Políticas de storage para avatares - qualquer um pode ver
CREATE POLICY "Avatar images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'avatars');

-- Usuários podem fazer upload de seus próprios avatares
CREATE POLICY "Users can upload their own avatar"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'avatars' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Usuários podem atualizar seus próprios avatares
CREATE POLICY "Users can update their own avatar"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'avatars' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Usuários podem deletar seus próprios avatares
CREATE POLICY "Users can delete their own avatar"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'avatars' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);