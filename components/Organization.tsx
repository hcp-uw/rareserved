import TEMPLOGO from '@/images/TEMPLOGO.png';
import PLACEHOLDER from '@/images/orgPlaceholder.png';

/** Creates an organization component with the given image, title, and header.
 * 
 * @param _props - container for organization information
 * @param _props.content - string description of the organization
 * @param _props.title - string name of the organization
 * @param _props - string image path of the logo
 * 
 * @returns Leftside square image with org title and description
 */
export default function Organization(_props : {content:string, title:string, imgPath:string}) {
  // TODO: change this image placeholder and find a better way
  let img = PLACEHOLDER.src;
  if (_props.imgPath==="TEMPLOGO") { img = TEMPLOGO.src; }
  if (_props.imgPath==="PLACEHOLDER") { img = PLACEHOLDER.src; }
  return (<div className="pb-70">
    <div className="flex-grow grid grid-cols-[15%_80%]">
      <img src={img} className="max-w-20 max-h-20"></img>
      <div className="ml-30">
        <h3 className="">{_props.title}</h3>
        <div className="max-w-20 max-h-20 mt-9"></div>
        <p>{_props.content}</p>
      </div>
    </div>
    </div>);
}
