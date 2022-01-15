<script setup lang="ts">
import { parseISO, format } from 'date-fns'

const { $sanity } = useNuxtApp()
const { data: posts } = await useAsyncData("posts", async () => {
  const query = `
  *[_type == "post"] | order(publishedAt) {
    _id, title, publishedAt, mainImage, slug, introText
  }
  `
  return await $sanity.fetch(query)
})
const displayDate = (post) => {
  return format(parseISO(post.publishedAt), "PP")
}
</script>

<template>
<div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <Meta name="description" content="Stay up to date with Shroud.email. Privacy news and product updates." />
  <Title>Shroud.email - Blog</Title>
  <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
    <div>
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Blog
      </h2>
      <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
        <p class="text-xl text-gray-500">
          The latest from Shroud.email.
        </p>
      </div>
    </div>
    <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
      <div v-for="post in posts">
        <p class="text-sm text-gray-500">
          <time datetime="2020-03-16">{{ displayDate(post) }}</time>
        </p>
        <NuxtLink :to="'/blog/' + post.slug.current" class="mt-2 block">
          <p class="text-xl font-semibold text-gray-900">
            {{ post.title }}
          </p>
          <p class="mt-3 text-base text-gray-500">
            {{ post.introText }}
          </p>
        </NuxtLink>
        <div class="mt-3">
          <NuxtLink :to="'/blog/' + post.slug.current" class="text-base font-semibold text-indigo-600 hover:text-indigo-500">
            Read more
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
