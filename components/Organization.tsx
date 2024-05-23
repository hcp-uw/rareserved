import TEMPLOGO from '@/images/TEMPLOGO.png';
import PLACEHOLDER from '@/images/orgPlaceholder.png';


interface image {
  type: string;
}

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
  // let img = PLACEHOLDER.src;
  let img = _props.imgPath;
  if (_props.imgPath==="TEMPLOGO") { img = TEMPLOGO.src; }
  // const logo:image = require('../images/TEMPLOGO.png');
  return (<div className="pb-70">
    
    <img src={"../images/TEMPLOGO.png"} />
    <div className="grid grid-cols-[15%_80%] ml-10px">
      <div style={{ backgroundImage: "url(/TEMPLOGO.src)" }} className="max-w-20 max-h-20"/>
      <div className="ml-30">
        <h3 className="">{_props.title}</h3>
        <div className="max-w-20 max-h-20 mt-9"></div>
        <p>{_props.content}</p>
      </div>
    </div>
    </div>);
}
