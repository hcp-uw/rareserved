import NavigationBar from "@/components/NavigationBar";
import SpecificPost from "@/components/SpecificPost";


export default async function ProtectedPage() {


  return (<>
  <NavigationBar/>
  <div id="main">
    <SpecificPost author="author" title="specific post" imgName="TEMPLOGO.png" content="content"/>
  </div>
    </>);
}
