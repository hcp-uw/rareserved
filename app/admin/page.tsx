import NavigationBar from "@/components/NavigationBar";
import NewBlogPost from "@/components/newBlogPost";

export default function Blog() {
  return (<>
    <NavigationBar></NavigationBar>
    <div id="main">
      <NewBlogPost></NewBlogPost>
    </div>
  </>);
}
