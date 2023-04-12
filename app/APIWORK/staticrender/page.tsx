import React from 'react'
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
    const res=await fetch('https://api.quotable.io/random?tags=technology', {cache:'force-cache'});
    if(!res.ok){
        throw new Error("Khalli Walli");
    }
    return res.json();
}
async function StaticRender() {
    const data:Quote=await getData();
  return (
    <div>{data.content}</div>
  )
}

export default StaticRender