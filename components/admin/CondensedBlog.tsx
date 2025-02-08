import tempLogo from "@/images/TEMPLOGO.png";
import { RSBlog } from "@/utils/data-types";

/**
 * 
 * @param props.imgName Name of image (if none, then use rareserved logo)
 * @param props.title Title of blog post
 * @param props.author Name of author
 * @returns Blog chunk component
 */
export default function CondensedBlog(blog : RSBlog, key : Number) {

    // TODO: if clicked, redirect("blog?id=123456") or smth????
    // return(<div className="min-w-200px max-w-200px shrink-0">
    return(<div className="w-full space-y-[10px]" key= {key.toString()}>
        <h3><a href={'?id=' + blog.id}>{blog.title}</a></h3>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >Delete</button>
    </div>);
}
