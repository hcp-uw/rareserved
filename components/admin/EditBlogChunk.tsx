'use client'
import { RSBlog } from "@/utils/data-types";
import BlogChunk from "../BlogChunk";
import { handleDelete } from "@/app/admin/blogs/actions";

/**
 * 
 * @param props.imgName Name of image (if none, then use rareserved logo)
 * @param props.title Title of blog post
 * @param props.author Name of author
 * @returns Blog chunk component
 */
interface EditBlogChunkProps {
    blog: RSBlog;
    index: Number;
}

const EditBlogChunk: React.FC<EditBlogChunkProps> = ({blog, index}) => {
    const deleteCallback = async () => await handleDelete(blog);
    return(<div key= {index.toString() + " with button"}>
        {BlogChunk(blog, index)}
        <button className="text-white mt-2 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" 
            onClick={deleteCallback}>Delete</button>
    </div>);
}

export default EditBlogChunk;
