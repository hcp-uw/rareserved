import { redirect } from 'next/navigation'
import { RSBlog, makeBlog } from '@/utils/data-types'
import { createClient } from '@/utils/supabase/server'
import { getBlog, getBlogs } from '@/utils/supabase/load-data'
import EditBlogChunk from '@/components/admin/EditBlogChunk'
import BlogChunk from '@/components/BlogChunk'
import FullBlogPost from '@/components/SpecificPost'
import EditFullBlog from '@/components/admin/EditFullBlog'
import PartialDivider from '@/components/PartialDivider'

export default async function Blog({searchParams}: {searchParams: Promise<{id: string }>}) {
  const { id } = await searchParams
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  if (id) {
    const blog : RSBlog = await getBlog(Number(id));
      if (!blog) {
        return (<>
          <div id="main">
            <h1> Blog Not Found :(</h1>
          </div>
        </>);
      }

      return (<>
        <div id="main">
          <EditFullBlog blog={blog} index ={1} />
        </div>
      </>);
  }

  // If no blog id was given, load default page

  const blogs : RSBlog[] = await getBlogs();

  return (<>
    <div id="main">
      <h1>Edit Blog Posts</h1>
      <PartialDivider></PartialDivider>
      <p className="mb-26px">Most recent</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-60px gap-x-60px">
        {blogs.map((blog, index, __) => (
          <EditBlogChunk blog={blog} index={index} key={index} />
        ))}
      </div>
    </div>
  </>);
}