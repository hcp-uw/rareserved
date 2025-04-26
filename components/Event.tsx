import calendarIcon from "@/images/icon-calendar.svg";
import timeIcon from "@/images/icon-time.svg";
import pinIcon from "@/images/icon-pin.svg";
import { RSEvent } from "@/utils/data-types";

/**
 * 
 * @param props.name Name of the event
 * @param props.desc Description of the event
 * @param props.startDate Date object containing the day/month/year and start time (if applicable)
 * @param props.endDate Date object containing the end time; D/M/Y is assumed to be the same as startDate
 * @param props.allDay True if all-day event, false otherwise; if true, there must be an endDate object
 * @param props.address Address of the event
 * @returns Event component
 */

// props: {name: string, desc: string, startDate: Date, endDate?: Date, allDay: boolean, address: string}
export default function Event(event : RSEvent, key: Number, link: boolean = false) {
    const dateOptions: Intl.DateTimeFormatOptions = {
        dateStyle: "long"
    }
    const timeOptions: Intl.DateTimeFormatOptions = {
        timeStyle: "short"
    }

    // Element displaying start to end time as long as event is not all-day
    let timeElement: JSX.Element = <></>;
    if (!event.full_day) {
        // Throw error if event requires an ending time but no endDate provided
        if (event.end_date == undefined || event.end_date == null) {
            throw new Error("Event '" + event.title + "' must have endDate");
        }
        timeElement = <><img src={timeIcon.src} alt="" className="mr-2" /><p className="font-bold">{event.start_date.toLocaleTimeString("en-US", timeOptions)}-{event.end_date.toLocaleTimeString("en-US", timeOptions)}</p></>;
    }

    const titleDiv = link ? <a href={'?id=' + event.id} ><h3 className="mb-2">{event.title}</h3></a> : <h3 className="mb-2">{event.title}</h3>;

    return(<div key= {key.toString()}>
        {titleDiv}
        <p className="mb-2">{event.description}</p>
        <div className="flex mb-2">
            <img src={calendarIcon.src} alt="" className="mr-2" />
            <p className="font-bold mr-10">{event.start_date.toLocaleDateString("en-US", dateOptions)}</p>
            {timeElement}
        </div>
        <div className="flex">
            <img src={pinIcon.src} alt="" className="mr-2 inline-block align-middle" />
            <p className="italic inline-block align-middle">{event.address}</p>
        </div>
    </div>);
}

function getEvents() {
    
}