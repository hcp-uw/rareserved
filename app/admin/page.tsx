import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import PartialDivider from '@/components/PartialDivider'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <>
    <div id="main" className="text-center">
      <h1>Hello Admin!</h1>
      <PartialDivider />
      <button className="mt-5 p-1 bg-darkblue text-white w-80 rounded-full"><a href={'/admin/blogs'}>Edit Blogs</a></button>
      <br />
      <button className="mt-5 mb-10 p-1 bg-darkblue text-white w-80 rounded-full"><a href={'/admin/events'}>Edit Events</a></button>
      <br />
      <a className="mx-auto cursor-pointer block w-fit mb-4" href="/">Back to regular website</a>
      {/* TODO implement logout?: <a className="mx-auto cursor-pointer block w-fit" onClick={logout}>Log out</a> */}
    </div>
  </>
}
