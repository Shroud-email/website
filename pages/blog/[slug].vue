<script setup lang="ts">
import { format, parseISO } from "date-fns"
import { SanityBlocks } from 'sanity-blocks-vue-component';
import OpenGraph from "~/components/open-graph.vue"

const { $sanity, ssrContext } = useNuxtApp()
const route = useRoute()
const { data: post, error } = await useAsyncData("blocks", async () => {
  const query = `
  *[_type == "post" && slug.current == "${route.params.slug}"][0]
  `
  const post = await $sanity.fetch(query)
  if (!post) return Promise.reject(new Error(`Post not found: ${route.params.slug}`))
  return post
})
const publishedDate = post ? format(parseISO(post.value.publishedAt), "PP") : null
</script>

<template>
<div class="relative py-16 bg-white overflow-hidden">
  <Meta name="description" :content="post && post.introText" />
  <OpenGraph :title="`Shroud.email - ${post?.title}`" :url="`https://shroud.email/${route.params.slug}`" />
  <Title>{{ post?.title || "Not found" }} - Shroud.email</Title>
  <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
    <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
      <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
      </svg>
      <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
      </svg>
      <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
      </svg>
    </div>
  </div>
  <!-- TODO: handle 404s here -->
  <div v-if="post" class="relative px-4 sm:px-6 lg:px-8">
    <div class="text-lg max-w-prose mx-auto">
      <h1>
        <span class="mb-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ post.title }}</span>
      </h1>
      <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">{{ publishedDate }}</span>
      <p class="mt-8 text-xl text-gray-700 leading-8">
        {{ post.introText }}
      </p>
    </div>
    <div class="mt-6 prose prose-indigo prose-lg text-gray-700 mx-auto">
      <SanityBlocks :blocks="post.body" />
    </div>
  </div>
</div>

</template>