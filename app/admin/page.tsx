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

  console.log("Adding a blog");
  upsertBlog(
    makeBlog(
      -1, 
      "This is a test of really good code.", 
      "sub title!! :)", 
      null, 
      "Zack", 
      "Tim was a very sad boy", 
      new Date()
    ), 
    supabase
  );


  return <p>Hello {data.user.email}</p>
}
