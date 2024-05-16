import TEMPLOGO from '@/images/TEMPLOGO.png';
import PLACEHOLDER from '@/images/orgPlaceholder.png';
import { StaticImageData } from 'next/image';

/** Creates an organization component with the given image, title, and header.
 * 
 * @param TODO
 * 
 * @returns Leftside square image with org title and description
 */
export default function Organization(_props : {content:string, title:string, imgPath:string}) {
  let img = PLACEHOLDER.src;
  if (_props.imgPath==="TEMPLOGO") { img = TEMPLOGO.src; }
  // TODO: find another way to load images, or update with logos
  if (_props.imgPath==="PLACEHOLDER") { img = PLACEHOLDER.src; }
  return (<div className="pb-70">
    {/* TODO: fix the padding margins thing leftside*/}
    <h3 className="text-left ml-24 pl-1 mb-2">{_props.title}</h3>
    <div className="flex">
      <img src={img} className="max-w-20 max-h-20 flex-1 mr-5"></img>
      <p>{_props.content}</p>
    </div>
    </div>);
}
