"use server"
import { RSBlog } from "@/utils/data-types";
import { deleteBlog } from "@/utils/supabase/update-data";

export const handleDelete = async (blog: RSBlog) => {
    console.log('deleting blog: ');
    console.log(blog)
    await deleteBlog(blog);
}