<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "Shroud.email",
  },
  type: {
    type: String,
    default: "website",
  },
  url: {
    type: String,
    required: true,
  },
})
</script>

<template>
<Meta property="og:title" :content="title" />
<Meta property="og:type" :content="type" />
<Meta property="og:url" :content="url" />
<Meta property="og:image" content="https://shroud.email/opengraph.png" />
<Meta property="og:site_name" content="Shroud.email" />
</template>
