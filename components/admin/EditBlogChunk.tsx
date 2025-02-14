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
// export default function EditBlogChunk(blog : RSBlog, key : Number, supabase: SupabaseClient) {

//     // TODO: if clicked, redirect("blog?id=123456") or smth????
//     // return(<div className="min-w-200px max-w-200px shrink-0">
//     return(<div className="w-full space-y-[10px]" key= {key.toString()}>
//         {BlogChunk(blog, key)}
//         <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
//             onClick={() => deleteBlog(blog, supabase)}>Delete</button>
//     </div>);
// }

interface EditBlogChunkProps {
    blog: RSBlog;
    index: Number;
}

const EditBlogChunk: React.FC<EditBlogChunkProps> = ({blog, index}) => {
    const deleteCallback = async () => await handleDelete(blog);
    return(<div key= {index.toString() + " with button"}>
        {BlogChunk(blog, index)}
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
            onClick={deleteCallback}>Delete</button>
    </div>);
}

export default EditBlogChunk;
