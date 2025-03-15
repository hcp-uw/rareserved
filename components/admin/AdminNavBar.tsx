import { FaHome } from "react-icons/fa";

export default function AdminNavBar(_props: any) {
    return (
        <div>
            <nav className="border-b border-black border-x-0 bg-white w-full z-20 top-0 start-0 fixed min-h-[20px]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center p-auto m-auto space-x-px">
                    <ul className="flex flex-row font-large items-center justify-center font-sans:Lato font-color:navbar mt-0 text-navbar space-x-12 rtl:space-x-reverse text-sm pl-18">
                        <li>
                            <a href="/admin" className="flex items-center">
                                <FaHome size={40} />
                            </a>
                        </li>
                        <li>
                            <a href="/admin/blogs" className="pr-6" aria-current="page">Edit Blogs</a>
                        </li>
                        <li>
                            <a href="/admin/events" className="pr-6">Edit Events</a>
                        </li>
                        <li>
                            <a href="/admin/orgs" className="">Edit Orgs</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>);
}