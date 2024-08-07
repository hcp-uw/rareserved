import NavigationBar from "@/components/NavigationBar";
import Organization from "@/components/Organization";
import PartialDivider from "@/components/PartialDivider";


export default async function ProtectedPage() {


  return (<>
  <NavigationBar/>
  <div id="main">
  <h1>Outreach, Diversity, and Inclusion</h1>
  <PartialDivider/>
  <Organization title="Name of Organization" content="Once upon a time in a small town lived a boy named Tom. Tom was always sad. He would sit by the riverbank every day, gazing at the water and the ducks, his eyes filled with a profound melancholy that no child his age should bear. "
   imgName="TEMPLOGO.png" link="faq" subtitle="subtitle"/>
   <Organization title="Name of Organization" content="Once upon a time in a small town lived a boy named Tom. Tom was always sad. He would sit by the riverbank every day, gazing at the water and the ducks, his eyes filled with a profound melancholy that no child his age should bear. "
   imgName=""/>
   <Organization title="Name of Organization" content="Once upon a time in a small town lived a boy named Tom. Tom was always sad. He would sit by the riverbank every day, gazing at the water and the ducks, his eyes filled with a profound melancholy that no child his age should bear. "
   imgName=""/>
  </div>
    </>);
}
