import NavigationBar from "@/components/NavigationBar";
import PartialDivider from "@/components/PartialDivider";
import Event from "@/components/Event";
import {getEvents} from '@/utils/supabase/load-data'
import { RSEvent, RSOrganization, RSBlog, makeEvent, makeOrg, makeBlog } from "@/utils/data-types";
import { useState } from "react";

export default async function ProtectedPage() {

  const [events, setEvents] = useState<RSEvent[]>([]);

  const eventInfo = {
    name: "Name of Event",
    desc: "Once upon a time in a small town lived a boy named Tom. Tom was always sad. He would sit by the riverbank every day, gazing at the water and the ducks, his eyes filled with a profound melancholy that no child his age should bear.",
    startDate: new Date(2024, 0, 1, 3, 0),
    endDate: new Date(2024, 0, 1, 5, 30),
    allDay: false,
    address: "123 Main Street, Anytown, USA 12345"}

    getEvents().then(
      (value) => {
        console.log(value);
        setEvents(value);
      },
      (error) => {
        console.log(`The promise has been rejected: ${error}`);
      }
    );

    const eventComponents = events.map(event => Event(event));

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
