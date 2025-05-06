"use server"
import { RSEvent } from "@/utils/data-types";
import { deleteEvent, saveEvent } from "@/utils/supabase/update-data";


export const handleDelete = async (event: RSEvent) => {
    await deleteEvent(event);
}

export const handleSave = async (event: RSEvent) => {
    await saveEvent(event);
}