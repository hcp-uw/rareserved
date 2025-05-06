import { redirect } from 'next/navigation'
import { RSBlog, makeBlog } from '@/utils/data-types'
import { createClient } from '@/utils/supabase/server'
import { getBlog, getBlogs } from '@/utils/supabase/load-data'
import EditBlogChunk from '@/components/admin/EditBlogChunk'
import EditFullBlog from '@/components/admin/EditFullBlog'
import PartialDivider from '@/components/PartialDivider'

export default async function BlogsPage({searchParams}: {searchParams: Promise<{id: string }>}) {
  const { id } = await searchParams
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  if (id) {
    let blog! : RSBlog;
    if (id == '-1') {
      blog = makeBlog(-1, "", "", null, "", "", new Date(2025, 0, 1));
    } else {
      blog = await getBlog(Number(id));
    }
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
      <div className='flow-root'>
        <h3 className="mb-26px float-left">Most recent at top</h3>
        <a href='?id=-1'>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right">Create Blog</button>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-60px gap-x-60px">
        {blogs.map((blog, index, __) => (
          <EditBlogChunk blog={blog} index={index} key={index} />
        ))}
      </div>
    </div>
  </>);
}