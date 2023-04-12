import React, { Suspense } from 'react'
import LoadingStrip from './loading';
interface Quote {
    _id: string;
    content: string;
    author: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
  } 
async function getData(){
    const res=await fetch('https://api.quotable.io/random?tags=technology', {cache:'no-store'});
    if(!res.ok){
        throw new Error("Khalli Walli");
    }
    return res.json();
}
async function DynamicRender() {
    const data:Quote=await getData();

  return (
    <Suspense fallback={<LoadingStrip text="Loading..."/>}>
          <div>{data.content}</div>

    </Suspense>
  )
}

export default DynamicRender