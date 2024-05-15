import TEMPLOGO from '@/images/TEMPLOGO.png';
import { StaticImageData } from 'next/image';

/** Creates an organization component with the given image, title, and header.
 * 
 * @param TODO
 * 
 * @returns Leftside square image with org title and description
 */
export default function Organization({content, title, imgPath} : {content:string, title:string, imgPath:string}) {
  console.log(imgPath);
  return (<div>
    <h3 className="text-left ml-24 mb-2">{title}</h3>
    <div className="flex">
      <img src={TEMPLOGO.src} className="max-w-20 flex-initial mr-5"></img>
      <p>{content}</p>
    </div>
    </div>);
}
