
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const inter = Inter({ subsets: ['latin'] })

async function getBlogs() {
  const response = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`);
if(!response.ok)
{
  throw new Error('Failed to Load Data');
}
return response.json();
 
}

export default async function Home() {
  const blogs=await getBlogs();
  return (
    <div>
    {
      blogs.items.map((item: any) => {
        const blogImage= blogs.includes.Asset.find((img:any)=>img.sys.id===item.fields.image.sys.id);
        const imgurl=blogImage.fields.file.url;
        console.log("Image URl is"+imgurl);

     return(   
     <>
          <div>{item.fields.title}</div>
          <div>{documentToReactComponents(item.fields.description)}</div>
          <div>{blogs.includes.Asset.map((a: any) => (
            <div>
              {item.fields.image.sys.id == a.sys.id? 
              <Image src={"https://"+imgurl} alt="" className='w-lg' width="100" height="100"/>: <div></div>}
            </div>
          ))}
          </div>
          {/* <div>{blogs.includes.Entry.map((entry: any) => (
            <div>
              {item.fields.creator.sys.id == entry.sys.id? 
              <div>Author: {entry.fields.name}</div>: <div></div>}
            </div>
          ))}
          </div> */}
          <br/>
          <br/>
          <br/>
        </>)
})}
  </div>
  )
}
