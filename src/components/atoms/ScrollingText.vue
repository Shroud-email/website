<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, PropType, ref } from 'vue';

const props = defineProps({
  words: {
    type: Array as PropType<string[]>,
    required: true,
  }
})

const timer = ref<ReturnType<typeof setInterval> | null>(null)
const currentIndex = ref(0)

const currentWord = computed(() => {
  return props.words[currentIndex.value]
})

onMounted(() => {
  timer.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.words.length
  }, 3000)
})

onBeforeUnmount(() => {
  if (!timer.value) return
  clearInterval(timer.value)
})
</script>

<template>
  <div class="inline relative">
    <transition enter-active-class="transition-all duration-700" leave-active-class="transition-all duration-700"
      enter-from-class="transform opacity-0 -translate-y-8" leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 translate-y-8">
      <span :key="currentIndex" class="absolute">
        {{ currentWord }}
      </span>
    </transition>
  </div>
</template>
