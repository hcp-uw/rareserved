import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import PartialDivider from '@/components/PartialDivider'
import EditEventChunk from '@/components/admin/EditEventChunk'
import { RSEvent, makeEvent } from '@/utils/data-types'
import { getEvents, getEvent } from '@/utils/supabase/load-data'
import EditFullEvent from '@/components/admin/EditFullEvent'

export default async function EventsPage({searchParams}: {searchParams: Promise<{id: string }>}) {
  const { id } = await searchParams
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  if (id) {
    let event! : RSEvent
    if (id == '-1') {
      event = makeEvent(-1, new Date(2025, 0, 1), new Date(2025, 0, 1), "", "", "", false)
    } else {
      event = await getEvent(Number(id));
    }
    if (!event) {
      return (<>
        <div id="main">
          <h1> Event Not Found :(</h1>
        </div>
      </>);
    }
    return (<>
      <div id="main">
        <EditFullEvent event={event} index={1} />
      </div>
    </>);
  }

  const events : RSEvent[] = await getEvents();

  return (<>
    <div id="main">
      <h1>Edit Events</h1>
      <PartialDivider></PartialDivider>
      <div className='flow-root'>
      <h3 className="mb-26px float-left">Most recent at top</h3>
        <a href='?id=-1'>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right">Create Event</button>
        </a>
      </div>
      <div className="flex flex-col gap-y-20">
      {events.map((event, index, __) => (
          <EditEventChunk event={event} index={index} key={index} />
        ))}
      </div>
    </div>
    </>);
}
