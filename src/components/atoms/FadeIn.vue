<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"

const observer = ref(null)
const observerContainer = ref(null)
const isVisible = ref(false)

const observerCallback = (entries, _observer) => {
  entries.forEach(entry => {
    // Assumes only a single entry. Also, once an entry is shown,
    // it's not hidden again.
    if (entry.isIntersecting) isVisible.value = true
  })
}

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  }
  observer.value = new IntersectionObserver(observerCallback, options)
  observer.value.observe(observerContainer.value)
})

onBeforeUnmount(() => {
  observer.value.disconnect()
})
</script>

<template>
<div ref="observerContainer" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'" class="transition-all duration-1000">
  <slot />
</div>
</template>