'use client'
import { RSEvent } from "@/utils/data-types";
import Event from "../Event";
import { handleDelete } from "@/app/admin/events/actions";
import { useState } from "react";

/**
 * 
 * @param props.imgName Name of image (if none, then use rareserved logo)
 * @param props.title Title of blog post
 * @param props.author Name of author
 * @returns Blog chunk component
 */
interface EditEventChunkProps {
    event: RSEvent;
    index: Number;
}

const EditEventChunk: React.FC<EditEventChunkProps> = ({event, index}) => {
    const [deleted, setDeleted] = useState<boolean>(false);
    const deleteCallback = async () => {
        setDeleted(true);
        return await handleDelete(event);
    }
    if (deleted) {
        return (<></>);
    }
    return(<div key= {index.toString() + " with button"}>
        {Event(event, index, true)}
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-2 rounded" 
            onClick={deleteCallback}>Delete</button>
    </div>);
}

export default EditEventChunk;
