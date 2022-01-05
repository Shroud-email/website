import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const client = sanityClient({
    projectId: "cyc9ywwe",
    dataset: "production",
    apiVersion: "2022-01-04",
    useCdn: true,
  })
  const imageBuilder = imageUrlBuilder(client)
  const imageUrl = (source) => imageBuilder.image(source)
  return {
    provide: {
      sanity: client,
      imageUrl,
    }
  }
})
