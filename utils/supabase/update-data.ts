import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { RSEvent, RSOrganization, RSBlog, makeEvent } from "../data-types";
import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";

export const upsertEvent = async (event: RSEvent, supabase: SupabaseClient) => {
    if (event.id == undefined) {
        // Add new event to database
        const { data, error } = await supabase
            .from('Events')
            .insert({
                title: event.title, 
                description: event.description, 
                start_date: event.start_date, 
                end_date: event.end_date, 
                full_day: event.full_day, 
                address: event.address
            })

            if (error != undefined) {
                console.log("Updating Error: " + error.message);
            }
    } else {
        // Update given event in database
        const { data, error } = await supabase
            .from('Events')
            .update({
                title: event.title, 
                description: event.description, 
                start_date: event.start_date, 
                end_date: event.end_date, 
                full_day: event.full_day, 
                address: event.address
            })
            .eq('id', event.id)

            if (error != undefined) {
                console.log("Updating Error: " + error.message);
            }
    }
}