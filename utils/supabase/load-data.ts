import { RSEvent, RSOrganization, RSBlog, makeEvent, makeOrg, makeBlog } from "../data-types";
import { createClient } from "@/utils/supabase/server"; //changed to avoid "from is not a function" error

// TODO: Make it so the amount parameter is used in determining
// how many items to return.

export const getEvents = async (amount? : number) : Promise<RSEvent[]> => {
    var supabase = createClient(); 
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

    return result;
} 

export const getOrgs = async (amount? : number) : Promise<RSOrganization[]> => {
    var supabase = createClient(); 
    const { data, error } = await supabase
    .from('Organizations')
    .select('*');

    const result : RSOrganization[] = [];

    data?.forEach( (value, _, __) => 
        result.push(
            makeOrg(
                value.id, 
                value.title, 
                value.subtitle, 
                value.link,
                value.description,
                ''
            )
        )
    );

    if (error != undefined) {
        console.log("Loading Error: " + error.message);
    }

    return result;
} 

export const getBlogs = async (amount? : number) : Promise<RSBlog[]> => {
    var supabase = createClient(); 
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
                value.picture,
                value.author, 
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

export const getBlog = async (id : number) : Promise<RSBlog> => {
    var supabase = createClient(); 
    const { data, error } = await supabase
    .from('Blogs')
    .select('*')
    .eq('id', id)

    const result : RSBlog[] = [];

    data?.forEach( (value, _, __) => 
        result.push(
            makeBlog(
                value.id, 
                value.title, 
                value.subtitle,
                value.picture,
                value.author, 
                value.text,
                new Date(value.date_posted)
            )
        )
        
    );

    if (error != undefined) {
        console.log("Loading Error: " + error.message);
    }

    if (result.length > 1) {
        console.error("Multiple blogs with the same id: " + id);
    }

    return result[0];
}