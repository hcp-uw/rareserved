import { RSBlog } from "@/utils/data-types";

export default function FullBlogPost(blog : RSBlog, key : Number) {
  let img = "/images/";
  if (blog.picture == null) {
    img += "TEMPLOGO.png"
  } else {
    img += blog.picture
  }

  const formattedDate = blog.date_posted.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  });

  // TODO: Add check to see if image exists, if not use a default image.
  // TODO: Change .toISOString string later
  return (<div className="pb-70px" key= {key.toString()}>   
      <span className="flex"> 
        <p className="mr-10 font-bold"> {blog.author} </p>
        <p className="font-normal"> {formattedDate} </p>
      </span>
      <h1 className="text-left">{blog.title}</h1>
      <h3 className="text-left">{blog.subtitle}</h3>
      <img src={img} className="w-full h-full max-h-[30vh] object-scale-down bg-cover bg-center bg-no-repeat mb-8" ></img>
      <div className="pl-15 max-h-133px">
        <p>{blog.text}</p>
      </div>
    </div>);
}
