
/** Creates an organization component with the given image, title, and header.
 * 
 * @param imgName - string image name of the logo (Must include type: .png, .jpg, etc.)
 * @param title - string title of the post
 * @param author - string name of the author
 * @param content - string content of the post
 * 
 * @returns a post containing all params, filling entire page
 */
export default function SpecificPost(props : {imgName:string, title:string, author:string, content:string, date:string}) {
  let img = props.imgName;
  img = "/images/" + img;
  return (<div className="pb-70px">   
      <span className="flex"> 
        <p className="mr-10 font-bold"> {props.author} </p>
        <p className="font-normal"> {props.date} </p>
      </span>
      <h1 className="text-left">{props.title}</h1>
          {/* <div className="w-133px h-133px bg-center">
            <div style={{ backgroundImage: `url(${img})` }} className="bg-cover bg-center"></div>
          </div> */}
      <div style={{ backgroundImage: `url(${img})` }} className="w-full h-[490px] bg-cover bg-center bg-no-repeat mb-8"></div>
      <div className="pl-15 max-h-133px">
        <p>{props.content}</p>
      </div>
    </div>);
}
