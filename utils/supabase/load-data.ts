import { RSEvent, RSOrganization, RSBlog, makeEvent, makeOrg, makeBlog } from "../data-types";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export const getEvents = async () : Promise<RSEvent[]> => {
    const { data, error } = await supabase
    .from('Events')
    .select('*')

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

    if (error != undefined) {
        console.log("Loading Error: " + error.message);
    }

    return result;
} 

export const getOrgs = async (amount: number) : Promise<RSOrganization[]> => {
    const { data, error } = await supabase
    .from('Organizations')
    .select('*')

    const result : RSOrganization[] = [];

    data?.forEach( (value, _, __) => 
        result.push(
            makeOrg(
                value.id, 
                value.title, 
                value.subtitle, 
                value.link,
                value.description
            )
        )
    );

    if (error != undefined) {
        console.log("Loading Error: " + error.message);
    }

    return result;
} 

export const getBlogs = async (amount: number) : Promise<RSBlog[]> => {
    const { data, error } = await supabase
    .from('Blogs')
    .select('*')

    const result : RSBlog[] = [];

    data?.forEach( (value, _, __) => 
        result.push(
            makeBlog(
                value.id, 
                value.title, 
                value.subtitle,
                value.author, 
                value.picture,
                value.text,
                value.date_posted
            )
        )
    );

    if (error != undefined) {
        console.log("Loading Error: " + error.message);
    }

    return result;
} 