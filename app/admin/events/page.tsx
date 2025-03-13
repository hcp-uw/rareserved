import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import PartialDivider from '@/components/PartialDivider'
import EditEventChunk from '@/components/admin/EditEventChunk'
import { RSEvent } from '@/utils/data-types'
import { getEvents } from '@/utils/supabase/load-data'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const events : RSEvent[] = await getEvents();

  return (<>
    <div id="main">
      <h1>Get Involved</h1>
      <PartialDivider></PartialDivider>
      <h2 className="mb-4">Events</h2>
      <div className="flex flex-col gap-y-20">
      {events.map((event, index, __) => (
          <EditEventChunk event={event} index={index} key={index} />
        ))}
      </div>
    </div>
    </>);
}
