import NavigationBar from "@/components/NavigationBar";
import Organization from "@/components/Organization";
import PartialDivider from "@/components/PartialDivider";


export default async function ProtectedPage() {


  return (<>
  <NavigationBar/>
  <div id="main">
  <h1>Organizations</h1>
  <PartialDivider/>
  <Organization title="Name of Organization" content="Once upon a time in a small town lived a boy named Tom. Tom was always sad. He would sit by the riverbank every day, gazing at the water and the ducks, his eyes filled with a profound melancholy that no child his age should bear. "
   imgPath="TEMPLOGO"/>
   <Organization title="Name of Organization" content="Once upon a time in a small town lived a boy named Tom. Tom was always sad. He would sit by the riverbank every day, gazing at the water and the ducks, his eyes filled with a profound melancholy that no child his age should bear. "
   imgPath=""/>
   <Organization title="Name of Organization" content="Once upon a time in a small town lived a boy named Tom. Tom was always sad. He would sit by the riverbank every day, gazing at the water and the ducks, his eyes filled with a profound melancholy that no child his age should bear. "
   imgPath=""/>
  </div>
    </>);
}
