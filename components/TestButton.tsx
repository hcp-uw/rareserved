'use client';
 
import { useState } from 'react'
import {getEvents} from '@/utils/supabase/load-data'
import { RSEvent, RSOrganization, RSBlog, makeEvent, makeOrg, makeBlog } from "@/utils/data-types";

 
/*export default function Counter() {
  const [count, setCount] = useState(0)
  
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}*/

export default function displaySpecificBlog() {
  var [title, setName] = useState('');
  var arr: RSEvent[] = [];

  //var value_ret: RSEvent[] = []

  var events = getEvents();
  events.then(
    (value) => {
      console.log(`The promise has been resolved`);
      title = value[0].title;

    },
    (error) => {
      console.log(`The promise has been rejected: ${error}`)
    }
  );

  console.log("JELGHSIOGHSOIGH");

  

  return (
    <div>
      <p>You clicked {title} times</p>
      <button onClick={() => setName(title)}>Click me</button>
    </div>
  )
}

/*async function myAsyncFunction(parameters: Promise<RSEvent[]>): RSEvent[] {
  try {
    const value = await getEvents();
    console.log('Promise resolved with value: ' + value);
  } catch (error) {
    console.error('Promise rejected with error: ' + error);
  }
  return "";
}*/