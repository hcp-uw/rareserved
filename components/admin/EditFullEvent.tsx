'use client'
import { RSEvent, makeEvent } from "@/utils/data-types";
import { handleSave } from "@/app/admin/events/actions";
import { useRouter } from 'next/navigation'

/**
 * 
 * @param props.imgName Name of image (if none, then use rareserved logo)
 * @param props.title Title of blog post
 * @param props.author Name of author
 * @returns Blog chunk component
 */
interface EditFullEvent {
    event: RSEvent;
    index: Number;
}

const EditFullEvent: React.FC<EditFullEvent> = ({event, index}) => {
    const router = useRouter()
  
    const handleSubmit = async (e: any) => {
        const form = document.getElementById('event_form');
        e.preventDefault();
        if (form instanceof HTMLFormElement) {
            const savedEvent: RSEvent = makeEvent(
                event.id,
                new Date((form.elements[2] as HTMLInputElement).value),
                new Date((form.elements[3] as HTMLInputElement).value),
                (form.elements[0] as HTMLInputElement).value,
                (form.elements[1] as HTMLInputElement).value,
                (form.elements[5] as HTMLInputElement).value,
                new Boolean((form.elements[4] as HTMLInputElement).checked).valueOf()
            )
            await handleSave(savedEvent);
            router.back()
        } else {
            console.error("Form element not found");
            return;
        }
    }

    const onCheck = async (event: any) => {
        const form = document.getElementById('event_form');
        if (form instanceof HTMLFormElement) {
            (form.elements[3] as HTMLInputElement).disabled = 
                new Boolean((form.elements[4] as HTMLInputElement).checked).valueOf();
        }
    }
    const end_date_placeholder =  event.end_date ? event.end_date.toISOString().slice(0, -1) : undefined;

    return (
        <div>
            <h1>Edit Event</h1>
            <form id="event_form" onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example Event Title" defaultValue={event.title} required />
                    </div>
                    <div>
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                        <input type="text" id="Address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123 University Way, Seatle WA" defaultValue={event.address} required />
                    </div>
                    <div>
                        <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date & Time</label>
                        <input type="datetime-local" id="stard_date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="test1.png" defaultValue={event.start_date.toISOString().slice(0, -1)} required />
                    </div>
                    <div>
                        <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date & Time</label>
                        <input type="datetime-local" id="end_date" disabled={event.full_day} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={end_date_placeholder} required />
                    </div>  
                </div>
                <div className="flex items-center border border-gray-200 rounded-md dark:border-gray-700 w-40 pl-2 pr-3 pt-3 pb-3">
                    <label htmlFor="full_day" className="w-full text-sm font-medium text-gray-900 dark:text-gray-300">Full Day Event</label>
                    <input type="checkbox" id="full_day" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" defaultChecked={event.full_day} onChange={onCheck} />
                </div>
                <div className="mb-6">
                    <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text</label>
                    <textarea name="body" id="body" className="resize-y rounded-md w-full border border-blue-gray-200 p-2.5 min-h-[200px]" placeholder="Event Text" defaultValue={event.description} required></textarea>
                </div>
                <div className="flow-root">
                    <button type="submit" className="float-left text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

                    <button type="button" className="float-right text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={router.back}>Cancel</button>
                </div>
            </form>
        </div>);
}

export default EditFullEvent;
