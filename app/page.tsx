import { createClient } from "@/utils/supabase/client";
import NavigationBar from "@/components/NavigationBar";
import PartialDivider from "@/components/PartialDivider";
import Footer from "@/components/Footer";
import BlogChunk from "@/components/BlogChunk";
import { getBlogs } from "@/utils/supabase/load-data";
import { RSBlog } from "@/utils/data-types";



export default async function Index() {
  const blogs : RSBlog[] = await getBlogs(3);
  const blogComponents = blogs.map((blog, index, __) => BlogChunk(blog, index));

  return (
    <>
      <NavigationBar/>
      <div style={{ backgroundImage: `url(${'/images/title_banner.jpg'})` }} className="w-full h-screen bg-cover bg-center bg-no-repeat mb-8"></div>
        <div id="main">
        <h1 className="mb-10">RAREserved is a UW registered student organization bringing attention to rare diseases in our community.</h1>
        <p className="">Over 7000 rare diseases impact people worldwide and have insufficient research and treatment available due to how infrequently these conditions occur. Historically, research has placed time and resources into topics that have profit, repeatedly underrepresenting rare diseases. For rare disease patients, they often do not receive a diagnosis for their disease, let alone be supported by treatment that makes a difference. RAREserved seeks to amplify voices to make knowledge about rare diseases accessible and engaging by telling real stories of those impacted by a rare disease. RAREserved conducts interviews and creates a narrative article that shares an individual's experience. We seek to educate our audience on rare disease topics and advocate for change and awareness of rare diseases as a marginalized community in healthcare. RAREserved recognizes the importance of diversity, equity, and inclusion in healthcare and research. Our mission is to raise awareness and knowledge for the pursuit of better change.</p>
        <PartialDivider/>
        <div className="grid grid-cols-[auto_80%] items-start">
          <h3 className="ml-[48px]">Blog</h3>
          <div className="pl-20 max-h-133px grid-flow-row-dense">
            <div>Check out blog posts from members of our community, curated by officers of the RAREserved student organization.</div>
        </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-60px gap-x-60px mt-10">
        {blogComponents}
        </div>

        {/* <button type="button"><a href="/specificpost">CLICKME: To specific post page</a></button> */}
      </div>
    </>
  );
}
