import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import PartialDivider from '@/components/PartialDivider'
import LogoutText from '@/components/admin/LogoutText'
import { logout } from '../login/actions'

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
      <a className="mx-auto mt-5 p-1 bg-darkblue text-white block w-80 rounded-full hover:no-underline" href={'/admin/blogs'}>Edit Blogs</a>
      <a className="mx-auto mt-5 p-1 bg-darkblue text-white block w-80 rounded-full hover:no-underline" href={'/admin/events'}>Edit Events</a>
      <a className="mx-auto mt-10 cursor-pointer block w-fit mb-4" href="/">Back to regular website</a>
      <LogoutText />
    </div>
  </>
}
