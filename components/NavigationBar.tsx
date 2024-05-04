// import { createClient } from "@/utils/supabase/server";
// import Link from "next/link";
// import { redirect } from "next/navigation";
import TEMPLOGO from '@/app/images/TEMPLOGO.png';

/** TODO: ADD HYPERLINKS TO OTHER PAGES WHEN DONE
 * 
 * @param _props - to make page.tsx happy, don't use
 * @returns Sticky navigation bar with logo and clickable link
 */
export default function NavigationBar(_props: any) {
  return (
    <nav className="border border-black bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl fixed flex flex-wrap items-center justify-left mx-auto px-10 py-0 space-x-px">
        <a href="https://localhost:3000" className="flex items-center space-x-3 rtl:space-x-reverse pl-4 pr-12">
            <img className="object-scale-down h-14 py-1" alt="Logo features low poly two hands holding an open book" src={TEMPLOGO.src}/>
        </a>
        <div> 
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
              <ul className="flex flex-row font-medium font-color:navbar mt-0 text-navbar space-x-12 rtl:space-x-reverse text-sm pl-18">
                  <li>
                      <a href="#" className="font-sans:Lato pr-6" aria-current="page">Blog</a>
                  </li>
                  <li>
                      <a href="#" className="font-sans:Lato pr-6">FAQ</a>
                  </li>
                  <li>
                      <a href="#" className="font-sans:Lato pr-6">Organizations</a>
                  </li>
                  <li>
                      <a href="#" className="font-sans:Lato">Get Involved</a>
                  </li>
              </ul>
          </div>
        </div>
      </div>
      </div>
    </nav>);
}
