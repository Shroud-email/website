<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, PropType } from "vue"

type Direction = "up" | "down" | "left" | "right"

const props = defineProps({
  fromDirection: {
    type: String as PropType<Direction>,
    default: "up",
  },
})

const observer = ref<IntersectionObserver | null>(null)
const observerContainer = ref(null)
const isVisible = ref(false)

const classes = computed(() => {
  switch (props.fromDirection) {
    case "up":
      return isVisible.value ? "translate-y-0" : "-translate-y-6"
    case "down":
      return isVisible.value ? "translate-y-0" : "translate-y-6"
    case "left":
      return isVisible.value ? "translate-x-0" : "-translate-x-6"
    case "right":
      return isVisible.value ? "translate-x-0" : "translate-x-6"
    default:
      throw new Error("Unknown direction " + props.fromDirection)
  }
})

const observerCallback: IntersectionObserverCallback = (entries, _observer) => {
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
  if (observerContainer.value) {
    observer.value.observe(observerContainer.value)
  }
})

onBeforeUnmount(() => {
  if (!observer.value) return

  observer.value.disconnect()
})
</script>

<template>
  <div ref="observerContainer" :class="classes + ' ' + (isVisible ? 'opacity-100' : 'opacity-0')"
    class="transition-all duration-1000">
    <slot />
  </div>
</template>