import Image from "next/image";
import { Inter } from "next/font/google";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const inter = Inter({ subsets: ["latin"] });

async function getBlogs() {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`
  );
  if (!response.ok) {
    throw new Error("Failed to Load Data");
  }
  return response.json();
}

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <>
      {blogs.items.map((item: any) => {
        const blogImage = blogs.includes.Asset.find(
          (img: any) => img.sys.id === item.fields.image.sys.id
        );
        const author=blogs.includes.Entry.find((auth:any)=>item.fields.author.sys.id==auth.sys.id)
        const authorName=author.fields.name;
        const imgurl = blogImage.fields.file.url;
        return (
          <div key={item.sys.id}>
            <div>{item.fields.title}</div>
            <div>{documentToReactComponents(item.fields.description)}</div>
            <div>            
                    <Image
                      src={`https://${imgurl}`}
                      alt=""
                      className="w-lg"
                      width="100"
                      height="100"
                    />               
         
            </div>
            <div>
            
                <h1>{authorName}</h1>
          
           
            </div>
            <br />
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
}
