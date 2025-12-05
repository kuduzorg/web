-- 1. Create the table for contribution requests
create table if not exists contribution_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  type text not null, -- 'correction', 'new_content', 'data_update', 'suggestion'
  subject text not null,
  content text not null,
  source_url text,
  submitter_name text,
  submitter_email text,
  media_url text, -- URL to the uploaded file in storage
  status text default 'pending', -- 'pending', 'approved', 'rejected'
  ip_address text -- Optional: for spam tracking
);

-- 2. Enable Row Level Security (RLS)
alter table contribution_requests enable row level security;

-- 3. Create Policy: Allow anyone (anon) to insert
create policy "Allow public inserts"
  on contribution_requests
  for insert
  to anon
  with check (true);

-- 4. Create Policy: Allow only admins/service_role to select/update (Optional, usually handled by dashboard or admin app)
-- For now, we just ensure public cannot read other people's submissions
create policy "Allow public to read own submissions"
  on contribution_requests
  for select
  to anon
  using (false); -- Deny all selects for anon (security by default)

-- 5. Create Storage Bucket for content requests
insert into storage.buckets (id, name, public)
values ('content-requests', 'content-requests', true)
on conflict (id) do nothing;

-- 6. Storage Policy: Allow public to upload files
create policy "Allow public uploads"
  on storage.objects
  for insert
  to anon
  with check ( bucket_id = 'content-requests' );

-- 7. Storage Policy: Allow public to read files (if needed for preview, or keep private if only admin should see)
create policy "Allow public reads"
  on storage.objects
  for select
  to anon
  using ( bucket_id = 'content-requests' );
