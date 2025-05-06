"use server"
import { RSBlog } from "@/utils/data-types";
import { deleteBlog, saveBlog } from "@/utils/supabase/update-data";

export const handleDelete = async (blog: RSBlog) => {
    await deleteBlog(blog);
}

export const handleSave = async (blog: RSBlog) => {
    await saveBlog(blog);
}

