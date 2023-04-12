import Image from 'next/image'
import { Inter } from 'next/font/google'
import StaticRender from './APIWORK/staticrender/page'
import ClientRender from './APIWORK/clientrender/page'

const inter = Inter({ subsets: ['latin'] })

async function getBlogs() {
  const response = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`)
}

export default function Home() {
  return (
    <div>asdasd</div>
  )
}
