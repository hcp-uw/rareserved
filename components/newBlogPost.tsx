'use client'
import { useEffect, useState } from "react"


/**
 * 
 */
export default function NewBlogPost() {
    const [titleText, setTitleText] = useState('');
    const [nameText, setNameText] = useState('');
    const [bodyText, setBodyText] = useState('');
    return <>
    <div className="bg-gray h-[calc(100vh+13vh)] w-full rounded-md">
        <div className="px-6% flex flex-wrap">
            <div className="pt-2%">
                Title
            </div>
            <textarea className="w-full rounded-md h-57px resize-none" 
                    value={titleText}
                    onChange={(e)=> setTitleText(e.target.value)}/>
            <div className="pt-2%">
                Name
            </div>
            <textarea className="w-full rounded-md h-57px resize-none" 
                    value={nameText}
                    onChange={(e)=> setNameText(e.target.value)}/>
            <div className="pt-2%">
                Body Text
            </div>
            <textarea className="w-full rounded-md h-[calc(50vh)]"
                    value={bodyText}
                    onChange={(e)=> setBodyText(e.target.value)}/>
            <button className="bg-darkblue w-143px h-62px rounded-full text-white mx-auto my-10%"
                    onClick={(e)=> console.log(bodyText)}>
                Upload
            </button>
        </div>
    </div>
    </>
}
