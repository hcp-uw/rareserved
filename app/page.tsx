'use client';

import { createClient } from "@/utils/supabase/client";
import NavigationBar from "@/components/NavigationBar";
import PartialDivider from "@/components/PartialDivider";
import Footer from "@/components/Footer";
import BlogChunk from "@/components/BlogChunk";



export default async function Index() {
  return (
    <>
      <NavigationBar/>
      <div style={{ backgroundImage: `url(${'images/tim.png'})` }} className="w-full h-screen bg-cover bg-center bg-no-repeat mb-8"></div>
        <div id="main">
        <h1 className="mb-10">RAREserved is a UW registered student organization bringing attention to rare diseases in our community.</h1>
        <p className="">Over 7000 rare diseases impact people worldwide and have insufficient research and treatment available due to how infrequently these conditions occur. Historically, research has placed time and resources into topics that have profit, repeatedly underrepresenting rare diseases. For rare disease patients, they often do not receive a diagnosis for their disease, let alone be supported by treatment that makes a difference. RAREserved seeks to amplify voices to make knowledge about rare diseases accessible and engaging by telling real stories of those impacted by a rare disease. RAREserved conducts interviews and creates a narrative article that shares an individual's experience. We seek to educate our audience on rare disease topics and advocate for change and awareness of rare diseases as a marginalized community in healthcare. RAREserved recognizes the importance of diversity, equity, and inclusion in healthcare and research. Our mission is to raise awareness and knowledge for the pursuit of better change.</p>
        <PartialDivider/>
        <div className="grid grid-cols-[auto_80%] items-start">
          <h3 className="ml-[48px]">Blog</h3>
          <div className="pl-20 max-h-133px grid-flow-row-dense">
            <div>“Once upon a time in a small town lived a boy named Tom. Tom was always sad. He would sit by the riverbank every day, gazing at the water and the ducks, his eyes filled with a profound melancholy that no child his age should bear. His heart was heavy with a sorrow that the town's folks could not comprehend. For Tom, the world was a canvas of grey, the colors of joy and happiness seemed to have faded away. His mother tried to cheer him up, with toys, candies, and tales of magic and wonder,”</div>
        </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-60px gap-x-60px mt-10">
        {/* <BlogChunk title="Blog Post" author="Tim"></BlogChunk>
        <BlogChunk title="Blog Post" author="Tim"></BlogChunk>
        <BlogChunk title="Blog Post" author="Tim"></BlogChunk> */}
        </div>
        <PartialDivider/>
        <div className="grid grid-cols-[auto_80%] items-start">
          <h3 className="ml-[48px]">Section</h3>
          <div className="pl-20 max-h-133px grid-flow-row-dense">
            <div>“Once upon a time in a small town lived a boy named Tom. Tom was always sad. He would sit by the riverbank every day, gazing at the water and the ducks, his eyes filled with a profound melancholy that no child his age should bear. His heart was heavy with a sorrow that the town's folks could not comprehend. For Tom, the world was a canvas of grey, the colors of joy and happiness seemed to have faded away. His mother tried to cheer him up, with toys, candies, and tales of magic and wonder,”</div>
        </div>
        </div>
        <PartialDivider/>

        <button type="button"><a href="/specificpost">CLICKME: To specific post page</a></button>
      </div>
      <Footer/>
    </>
  );
}
