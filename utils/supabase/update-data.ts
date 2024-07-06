import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { RSEvent, RSOrganization, RSBlog, makeEvent } from "../data-types";
import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { describe } from "node:test";

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

export const upsertOrg = async (organization: RSOrganization, supabase: SupabaseClient) => {
    if (organization.id == undefined) {
        // Add new event to database
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
        // Update given event in database
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

export const upsertBlog = async (blog: RSBlog, supabase: SupabaseClient) => {
    if (blog.id == undefined) {
        // Add new event to database
        const { data, error } = await supabase
            .from('Events')
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
        // Update given event in database
        const { data, error } = await supabase
            .from('Events')
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