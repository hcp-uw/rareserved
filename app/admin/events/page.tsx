import { redirect } from 'next/navigation'
import { upsertBlog } from '@/utils/supabase/update-data'
import { makeBlog } from '@/utils/data-types'
import { createClient } from '@/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <p>Hello {data.user.email}</p>
}