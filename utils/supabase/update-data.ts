import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { RSEvent, RSOrganization, RSBlog, makeEvent } from "../data-types";
import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { describe } from "node:test";

// TODO: Change upsertOrg to add image data to the database. Also edit the database table 
// to include an image column.
// TODO: Make the upsert functions return the id of the item they just added or updated
// to make it easier to keep track of ids.

/**
 * Updates or adds a given event to the database. If the event is not in the database
 * it will add it, which creates a new id for it. 
 * @param event The event to upsert to the database
 * @param supabase The supabase client linked to the database
 */
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

/**
 * Updates or adds a given organization to the database. If the organization is not in the database
 * it will add it, which creates a new id for it. 
 * @param organization The organization to upsert to the database
 * @param supabase The supabase client linked to the database
 */
export const upsertOrg = async (organization: RSOrganization, supabase: SupabaseClient) => {
    if (organization.id == undefined) {
        // Add new organization to database
        const { data, error } = await supabase
            .from('Organizations')
            .insert({
                title: organization.title, 
                subtitle: organization.subtitle,
                link: organization.link,
                description: organization.description
            })

            if (error != undefined) {
                console.log("Updating Error: " + error.message);
            }
    } else {
        // Update given organization in database
        const { data, error } = await supabase
            .from('Organizations')
            .update({
                title: organization.title, 
                subtitle: organization.subtitle,
                link: organization.link,
                description: organization.description
            })
            .eq('id', organization.id)

            if (error != undefined) {
                console.log("Updating Error: " + error.message);
            }
    }
}

/**
 * Updates or adds a given blog to the database. If the blog is not in the database
 * it will add it, which creates a new id for it. 
 * @param blog The blog to upsert to the database
 * @param supabase The supabase client linked to the database
 */
export const upsertBlog = async (blog: RSBlog, supabase: SupabaseClient) => {
    if (blog.id == -1) {
        // Add new blog to database
        const { data, error } = await supabase
            .from('Blogs')
            .insert({
                title: blog.title, 
                subtitle: blog.subtitle, 
                picture: blog.picture,
                author: blog.author,
                text: blog.text,
                date_posted: blog.date_posted
            })

            if (error != undefined) {
                console.log("Updating Error: " + error.message);
            }
    } else {
        // Update given blog in database
        const { data, error } = await supabase
            .from('Blogs')
            .update({
                title: blog.title, 
                subtitle: blog.subtitle, 
                picture: blog.picture,
                author: blog.author,
                text: blog.text,
                date_posted: blog.date_posted
            })
            .eq('id', blog.id)

            if (error != undefined) {
                console.log("Updating Error: " + error.message);
            }
    }
}

export const deleteBlog = async (blog: RSBlog) => {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('Blogs')
        .delete()
        .eq('id', blog.id)

    if (error != undefined) {
        console.log("Deletion Error: " + error.message);
    }
}