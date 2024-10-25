import NavigationBar from "@/components/NavigationBar";
import PartialDivider from "@/components/PartialDivider";
import BlogChunk from "@/components/BlogChunk";
import { RSBlog } from "@/utils/data-types";
import { getBlogs } from "@/utils/supabase/load-data";

export default async function Blog() {

  const blogs : RSBlog[] = await getBlogs();

  const blogComponents = blogs.map((blog, index, __) => BlogChunk(blog, index))

  /*
    With New Post button (removed because currently only admin can make posts):

    <div className="flex justify-between items-center mb-26px">
      <p>Most recent</p>
      <a href="/404" className="bg-gray hover:bg-accent rounded-full px-8 py-2 caption">New Post</a>
    </div>
  */

  return (<>
    <NavigationBar></NavigationBar>
    <div id="main">
      <h1>Blog Posts</h1>
      <PartialDivider/>
      <p className="mb-26px">Most recent</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-60px gap-x-60px">
        {blogComponents}
      </div>
    </div>
  </>);
}
