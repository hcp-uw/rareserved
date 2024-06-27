import { RSEvent, RSOrganizations, RSBlog } from "../data-types";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export const getEvents = async (amount: number) : Promise<RSEvent[]> => {
    const { data, error } = await supabase
    .from('Test')
    .select('*')

    console.log(data);
} 

export const setEvent = async (id: number, newEvent: RSEvent) : Promise<RSEvent[]> => {

}

export const getOrgs = async (amount: number) : Promise<RSOrganizations[]> => {

} 

export const getBlogs = async (amount: number) : Promise<RSBlog[]> => {

} 