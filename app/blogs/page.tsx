import NavigationBar from "@/components/NavigationBar";
import PartialDivider from "@/components/PartialDivider";
import BlogChunk from "@/components/BlogChunk";
import { RSBlog } from "@/utils/data-types";
import { getBlog, getBlogs } from "@/utils/supabase/load-data";
import FullBlogPost from "@/components/SpecificPost";

export default async function Blog({searchParams}: {searchParams: Promise<{id: string }>}) {
  const { id } = await searchParams

  if (id != undefined) {
    // load post specific page
    const blog : RSBlog = await getBlog(Number(id));

    if (blog == undefined) {
      return (<>
        <NavigationBar/>
        <div id="main">
          <h1> Blog Not Found :(</h1>
        </div>
      </>);
    }
    
    return (<>
      <NavigationBar/>
      <div id="main">
        {FullBlogPost(blog, 1)}
      </div>
    </>);
  } else {
    // load default blog page
    const blogs : RSBlog[] = await getBlogs();
    const blogComponents = blogs.map((blog, index, __) => BlogChunk(blog, index));

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
}
