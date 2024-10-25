import tempLogo from "@/images/TEMPLOGO.png";
import { RSBlog } from "@/utils/data-types";

/**
 * 
 * @param props.imgName Name of image (if none, then use rareserved logo)
 * @param props.title Title of blog post
 * @param props.author Name of author
 * @returns Blog chunk component
 */
export default function BlogChunk(blog : RSBlog, key : Number) {
    // Element displaying start to end time as long as event is not all-day
    let picture: JSX.Element = <></>;
    if (blog.picture != null) {
        // Note the empty alt text is on purpose, since these images either don't have
        // associated alt text or are decorative/don't add important meaning
        picture = <img src={blog.picture} alt="" className="w-full"/>
    } else {
        picture = <img src={tempLogo.src} alt="" className="w-full"/>
    }

    // TODO: if clicked, redirect("blog?id=123456") or smth????
    // return(<div className="min-w-200px max-w-200px shrink-0">
    return(<div className="w-full space-y-[10px]" key= {key.toString()}>
        {picture}
        <h3><a href="#">{blog.title}</a></h3>
        <p className="caption"><span>By</span> {blog.author}</p>
    </div>);
}
