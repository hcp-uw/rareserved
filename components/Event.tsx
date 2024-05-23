import calendarIcon from "@/images/calendar-icon.svg";

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
export default function Event(props: {name: string, desc: string, startDate: Date, endDate?: Date, allDay: boolean, address: string}) {
    const dateOptions: Intl.DateTimeFormatOptions = {
        dateStyle: "long"
    }
    const timeOptions: Intl.DateTimeFormatOptions = {
        timeStyle: "short"
    }

    // Element displaying start to end time as long as event is not all-day
    let timeElement: JSX.Element = <></>;
    if (!props.allDay) {
        // Throw error if event requires an ending time but no endDate provided
        if (props.endDate == undefined) {
            throw new Error("Event '" + props.name + "' must have endDate");
        }
        timeElement = <p className="font-bold">{props.startDate.toLocaleTimeString("en-US", timeOptions)}–{props.endDate.toLocaleTimeString("en-US", timeOptions)}</p>;
    }

    return(<div>
        <h3 className="mb-2">{props.name}</h3>
        <p className="mb-2">{props.desc}</p>
        <div className="flex gap-x-10 mb-2">
            <img src={calendarIcon} alt=""></img>
            <p className="font-bold">{props.startDate.toLocaleDateString("en-US", dateOptions)}</p>
            {timeElement}
        </div>
        <p className="italic">{props.address}</p>
    </div>);
}