import NavigationBar from "@/components/NavigationBar";
import PartialDivider from "@/components/PartialDivider";
import BlogChunk from "@/components/BlogChunk";

export default function Blog() {
  // TODO this would be data from backend
  let blogData = [
    {
      title: "Blog Number 1",
      author: "Tom the Sad Boy"
    },
    {
      title: "Blog Number 2: Electric Boogaloo",
      author: "Bill the Happy Boy"
    },
    {
      title: "Blog Number 3: The Third",
      author: "Tom Billington"
    },
    {
      title: "Blog Number 4: The Fourth",
      author: "Team Bill"
    }
  ];

  let blogChunks: JSX.Element[] = [];
  for (let i = 0; i < blogData.length; i++) {
    blogChunks.push(<BlogChunk {...blogData[i]}/>);
  }

  return (<>
    <NavigationBar></NavigationBar>
    <div id="main">
      <h1>Blog Posts</h1>
      <PartialDivider/>

      <div className="flex justify-between items-center mb-26px">
        <p>Most recent</p>
        <a href="/404" className="bg-gray hover:bg-accent rounded-full px-8 py-2 caption">New Post</a>
      </div>

      {/* <div className="flex flex-wrap justify-around gap-y-60px"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-60px gap-x-60px">
        {blogChunks}
      </div>
    </div>
  </>);
}
