import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import PartialDivider from '@/components/PartialDivider'
<<<<<<< HEAD
<<<<<<< HEAD
import LogoutText from '@/components/admin/LogoutText'
import { logout } from '../login/actions'
=======
>>>>>>> 7c4d99d (Update admin welcome page)
=======
import LogoutText from '@/components/admin/LogoutText'
import { logout } from '../login/actions'
>>>>>>> 666c97d (Update edit buttons, add logout)

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 666c97d (Update edit buttons, add logout)
      <a className="mx-auto mt-5 p-1 bg-darkblue text-white block w-80 rounded-full hover:no-underline" href={'/admin/blogs'}>Edit Blogs</a>
      <a className="mx-auto mt-5 p-1 bg-darkblue text-white block w-80 rounded-full hover:no-underline" href={'/admin/events'}>Edit Events</a>
      <a className="mx-auto mt-10 cursor-pointer block w-fit mb-4" href="/">Back to regular website</a>
      <LogoutText />
<<<<<<< HEAD
=======
      <button className="mt-5 p-1 bg-darkblue text-white w-80 rounded-full"><a href={'/admin/blogs'}>Edit Blogs</a></button>
      <br />
      <button className="mt-5 mb-10 p-1 bg-darkblue text-white w-80 rounded-full"><a href={'/admin/events'}>Edit Events</a></button>
      <br />
      <a className="mx-auto cursor-pointer block w-fit mb-4" href="/">Back to regular website</a>
      {/* TODO implement logout?: <a className="mx-auto cursor-pointer block w-fit" onClick={logout}>Log out</a> */}
>>>>>>> 7c4d99d (Update admin welcome page)
=======
>>>>>>> 666c97d (Update edit buttons, add logout)
    </div>
  </>
}
