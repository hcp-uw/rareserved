import { redirect } from 'next/navigation'
import { RSBlog, makeBlog } from '@/utils/data-types'
import { createClient } from '@/utils/supabase/server'
import { getBlogs } from '@/utils/supabase/load-data'
import EditBlogChunk from '@/components/admin/EditBlogChunk'
import BlogChunk from '@/components/BlogChunk'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const blogs : RSBlog[] = await getBlogs();

  return (<>
    <div id="main">
      <h1>Edit Blog Posts</h1>
      <p className="mb-26px">Most recent</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-60px gap-x-60px">
        {blogs.map((blog, index, __) => (
          <EditBlogChunk blog={blog} index={index} key={index} />
        ))}
      </div>
    </div>
  </>);
}