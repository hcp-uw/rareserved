// import { createClient } from "@/utils/supabase/server";
// import Link from "next/link";
// import { redirect } from "next/navigation";
import TEMPLOGO from '@/images/TEMPLOGO.png';

/**
 * 
 * @param _props - to make page.tsx happy, don't use
 * @returns Sticky navigation bar with logo and clickable links
 */
export default function NavigationBar(_props: any) {
  return (
    <nav className="border-b border-black border-x-0 bg-white w-full z-20 top-0 start-0 fixed">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-left mx-auto px-10 py-0 space-x-px">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse pl-4 pr-12">
            <img className="object-scale-down h-14 py-1" alt="Logo features low poly two hands holding an open book" src={TEMPLOGO.src}/>
        </a>
        <div> 
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
                <ul className="flex flex-row font-medium font-sans:Lato font-color:navbar mt-0 text-navbar space-x-12 rtl:space-x-reverse text-sm pl-18">
                    <li>
                        <a href="/blog" className="pr-6" aria-current="page">Blog</a>
                    </li>
                    <li>
                        <a href="/faq" className="pr-6">FAQ</a>
                    </li>
                    <li>
                        <a href="/organizations" className="pr-6">Organizations</a>
                    </li>
                    <li>
                        <a href="/getinvolved" className="">Get Involved</a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>);
}
