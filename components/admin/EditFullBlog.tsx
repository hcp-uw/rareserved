'use client'
import { RSBlog, makeBlog } from "@/utils/data-types";
import { handleSave } from "@/app/admin/blogs/actions";
import { useRouter } from 'next/navigation'

/**
 * 
 * @param props.imgName Name of image (if none, then use rareserved logo)
 * @param props.title Title of blog post
 * @param props.author Name of author
 * @returns Blog chunk component
 */
interface EditFullBlog {
    blog: RSBlog;
    index: Number;
}

const EditFullBlog: React.FC<EditFullBlog> = ({blog, index}) => {
    const router = useRouter()
  
    const handleSubmit = async (event: any) => {
        const form = document.getElementById('blog_form');
        event.preventDefault();
        if (form instanceof HTMLFormElement) {
            const pictureValue = (form.elements[2] as HTMLInputElement).value;
            const savedBlog: RSBlog = makeBlog(
                blog.id,
                (form.elements[0] as HTMLInputElement).value,
                (form.elements[1] as HTMLInputElement).value,
                (pictureValue == "") ? null : pictureValue,
                (form.elements[4] as HTMLInputElement).value,
                (form.elements[5] as HTMLInputElement).value,
                new Date((form.elements[3] as HTMLInputElement).value)
            )
            handleSave(savedBlog);
            router.back()
        } else {
            console.error("Form element not found");
            return;
        }
    }

    return (
        <div>
            <h1>Edit Blog</h1>
            <form id="blog_form" onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example Blog Title" defaultValue={blog.title} required />
                    </div>
                    <div>
                        <label htmlFor="subtitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subtitle</label>
                        <input type="text" id="subtitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example Blog Subtitle" defaultValue={blog.subtitle} />
                    </div>
                    <div>
                        <label htmlFor="picture_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture Path</label>
                        <input type="text" id="picture_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="test1.png" defaultValue={blog.picture ? blog.picture : ""} />
                    </div>
                    <div>
                        <label htmlFor="date_posted" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Posted</label>
                        <input type="datetime-local" id="date_posted" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={blog.date_posted.toISOString().slice(0, -1)} required />
                    </div>  
                </div>
                <div className="mb-6">
                    <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                    <input type="text" id="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" defaultValue={blog.author} required />
                </div> 
                <div className="mb-6">
                    <label htmlFor="body" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text</label>
                    <textarea name="body" id="body" className="resize-y rounded-md w-full border border-blue-gray-200 p-2.5 min-h-[200px]" placeholder="Blog Text" defaultValue={blog.text} required></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
            </form>
        </div>);
}

export default EditFullBlog;
