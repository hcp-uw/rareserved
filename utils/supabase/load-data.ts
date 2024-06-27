import { RSEvent, RSOrganizations, RSBlog, makeEvent } from "../data-types";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export const getEvents = async () : Promise<RSEvent[]> => {
    const { data, error } = await supabase
    .from('Events')
    .select('*')

    if (data != null) {
        console.log(data);
        console.log(data[0]);
    }

    const result : RSEvent[] = [];

    data?.forEach( (value, _, __) => 
        result.push(
            makeEvent(
                value.id, 
                value.start_date, 
                value.end_date, 
                value.title,
                value.address,
                value.description,
                value.full_day
            )
        )
    );

    console.log("Error is: " + error?.message);

    return result;
} 

export const setEvent = async (id: number, newEvent: RSEvent) : Promise<RSEvent[]> => {
    return null!;
}

export const getOrgs = async (amount: number) : Promise<RSOrganizations[]> => {
    return null!;
} 

export const getBlogs = async (amount: number) : Promise<RSBlog[]> => {
    return null!;
} 