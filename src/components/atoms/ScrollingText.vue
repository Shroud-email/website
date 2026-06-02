<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  words: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const timer = ref<ReturnType<typeof setInterval> | null>(null);
const currentIndex = ref(0);

const currentWord = computed(() => props.words[currentIndex.value]);
// Reserve width for the longest word so neighbouring text never reflows.
const widthCh = computed(() =>
  Math.max(...props.words.map((w) => w.length)),
);

onMounted(() => {
  // Only cycle words when motion is allowed (JS on, no reduced-motion).
  // Otherwise the first word stays put.
  if (!document.documentElement.classList.contains("motion-ok")) return;

  timer.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.words.length;
  }, 2600);
});

onBeforeUnmount(() => {
  if (!timer.value) return;
  clearInterval(timer.value);
});
</script>

<template>
  <span
    class="relative inline-block align-bottom overflow-hidden"
    :style="{ width: widthCh + 'ch', height: '1.1em' }"
  >
    <transition
      enter-active-class="transition duration-500 ease-out"
      leave-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-full"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <span :key="currentIndex" class="absolute inset-x-0 top-0">
        {{ currentWord }}
      </span>
    </transition>
  </span>
</template>
