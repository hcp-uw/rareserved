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
  return (<div className="flex-auto">
    <h2>{title}</h2>
    <p>{content}</p>
    <img src={TEMPLOGO.src}></img>
    </div>);
}
