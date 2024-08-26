import { RSEvent, RSOrganization, RSBlog, makeEvent, makeOrg, makeBlog } from "../data-types";
import { createClient } from "@/utils/supabase/server"; //changed to avoid "from is not a function" error

const supabase = createClient(); 

// TODO: Make it so the amount parameter is used in determining
// how many items to return.

export const getEvents = async (amount? : number) : Promise<RSEvent[]> => {
    const { data, error } = await supabase
    .from('Events')
    .select('*'); 

    const result : RSEvent[] = [];

    data?.forEach( (value, _, __) => 
        result.push(
            makeEvent(
                value.id, 
                new Date(value.start_date), 
                new Date(value.end_date), 
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

    //return result;
    return new Promise<RSEvent[]>((resolve, reject) => {
        resolve(result);
    });
} 

export const getOrgs = async (amount? : number) : Promise<RSOrganization[]> => {
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
                value.description,
                value.image
            )
        )
    );

    if (error != undefined) {
        console.log("Loading Error: " + error.message);
    }

    return result;
} 

export const getBlogs = async (amount? : number) : Promise<RSBlog[]> => {
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
                new Date(value.date_posted)
            )
        )
    );

    if (error != undefined) {
        console.log("Loading Error: " + error.message);
    }

    return result;
} 