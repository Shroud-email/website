<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, PropType, ref } from 'vue';

const props = defineProps({
  words: Array as PropType<string[]>,
})

const timer = ref(null)
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
  clearInterval(timer.value)
})
</script>

<template>
  <div class="inline relative">
    <transition name="slide-up">
      <span :key="currentIndex" class="absolute">
        {{ currentWord }}
      </span>
    </transition>
  </div>
</template>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  @apply transition-all duration-500 ease-in-out;
}

.slide-up-enter-from {
  @apply transform opacity-0 -translate-y-6;
}

.slide-up-leave-from {
  @apply transform opacity-100 translate-y-0;
}

.slide-up-leave-to {
  @apply transform opacity-0 translate-y-12;
}
</style>