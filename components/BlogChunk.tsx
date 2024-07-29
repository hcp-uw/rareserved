import tempLogo from "@/images/TEMPLOGO.png";

/**
 * 
 * @param props.imgName Name of image (if none, then use rareserved logo)
 * @param props.title Title of blog post
 * @param props.author Name of author
 * @returns Blog chunk component
 */
export default function BlogChunk(props: {imgName?: string, title: string, author: string}) {
    // Element displaying start to end time as long as event is not all-day
    let picture: JSX.Element = <></>;
    if (props.imgName != undefined) {
        // Note the empty alt text is on purpose, since these images either don't have
        // associated alt text or are decorative/don't add important meaning
        picture = <img src={props.imgName} alt="" className="w-full"/>
    } else {
        picture = <img src={tempLogo.src} alt="" className="w-full"/>
    }

    // TODO: if clicked, redirect("blog?id=123456") or smth????
    // return(<div className="min-w-200px max-w-200px shrink-0">
    return(<div className="w-full space-y-[10px]">
        {picture}
        <h3>{props.title}</h3>
        <p className="caption"><span>By</span> {props.author}</p>
    </div>);
}
