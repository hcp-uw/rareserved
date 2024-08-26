import NavigationBar from "@/components/NavigationBar";
import Organization from "@/components/Organization";
import PartialDivider from "@/components/PartialDivider";
import { RSOrganization } from "@/utils/data-types";
import { getOrgs } from "@/utils/supabase/load-data";


export default async function ProtectedPage() {

  const orgs : RSOrganization[] = await getOrgs();

  const orgsComponents = orgs.map((org, index, __) => Organization(org, index));

  return (<>
  <NavigationBar/>
  <div id="main">
  <h1>Outreach, Diversity, and Inclusion</h1>
  <PartialDivider/>
  {orgsComponents}
  </div>
    </>);
}
