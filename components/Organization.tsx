/** Creates an organization component with the given image, title, and header.
 * 
 * @param props - container for organization information
 * @param props.content - string description of the organization
 * @param props.title - string name of the organization
 * @param props.imgName - string image name of the logo (Must include type: .png, .jpg, etc.)
 * 
 * @returns Leftside square image with org title and description
 */
export default function Organization(props : {content:string, title:string, imgName:string}) {
  let img = props.imgName;
  if (img === "") {
    img = "/images/orgPlaceholder.png"
  } else { 
    img = "/images/" + img;
  }
  return (<div className="pb-70">    
    <div className="grid grid-cols-[auto_80%]">
      <div style={{ backgroundImage: `url(${img})` }} className="max-w-133px max-h-133px bg-contain bg-no-repeat"/>
        <div className="pl-15 max-h-133px">
          <h3 className="">{props.title}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </div>);
}
