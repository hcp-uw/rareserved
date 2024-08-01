/** Creates an organization component with the given image, title, and header.
 * 
 * @param imgName - string image name of the logo (Must include type: .png, .jpg, etc.)
 * @param title - string title of the post
 * @param author - string name of the author
 * @param content - string content of the post
 * 
 * @returns a post containing all params, filling entire page
 */
export default function SpecificPost(props : {imgName:string, title:string, author:string, content:string}) {
  let img = props.imgName;
  img = "/images/" + img;
  return (<div className="pb-70px">    
      <h1>{props.title}</h1>
        <p className="text-center"> By: {props.author}</p>
        <div className="justify-items-center">
          <div style={{ backgroundImage: `url(${img})` }} className="w-133px h-133px bg-cover bg-center"/>
        </div>
        <div className="pl-15 max-h-133px">
          <p>{props.content}</p>
        </div>
    </div>);
}
