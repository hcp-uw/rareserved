import NavigationBar from "@/components/NavigationBar";
import PartialDivider from "@/components/PartialDivider";
import Event from "@/components/Event";
import {getEvents} from '@/utils/supabase/load-data'
import { RSEvent } from "@/utils/data-types";

export default async function ProtectedPage() {

  const events : RSEvent[] = await getEvents();

  const eventComponents = events.map((event, index, __) => Event(event, index));

  // TODO: if no events in list:
  if (false) {
    return (<>
      <NavigationBar></NavigationBar>
      <div id="main">
        <h1>Get Involved</h1>
        <PartialDivider></PartialDivider>
        <h2 className="mb-4">Events</h2>
        <p>No events right now. Check back in later!</p>
      </div>
    </>);
  }

  return (<>
    <NavigationBar></NavigationBar>
    <div id="main">
      <h1>Get Involved</h1>
      <PartialDivider></PartialDivider>
      <h2 className="mb-4">Events</h2>
      <div className="flex flex-col gap-y-20">
        {eventComponents}
      </div>
    </div>
    </>);
}
