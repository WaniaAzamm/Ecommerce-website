import { createClient } from 'next-sanity'

import imageUrlBuilder from "@sanity/image-url"
export const client = createClient({
  projectId:"z6ntq1tv",
  dataset:"production",
  apiVersion:"v2024-10-07",
  useCdn: true, 
})

const builder = imageUrlBuilder(client)

export function urlFor(source : any) {
  return builder.image(source)
}