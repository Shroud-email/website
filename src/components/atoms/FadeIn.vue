<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import type { PropType } from "vue";

type Direction = "up" | "down" | "left" | "right";

defineProps({
  fromDirection: {
    type: String as PropType<Direction>,
    default: "up",
  },
});

const observer = ref<IntersectionObserver | null>(null);
const observerContainer = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const observerCallback: IntersectionObserverCallback = (entries) => {
  entries.forEach((entry) => {
    // Assumes a single entry. Once shown, it stays shown.
    if (entry.isIntersecting) isVisible.value = true;
  });
};

onMounted(() => {
  // The reveal only applies when `motion-ok` is set (JS on, motion allowed).
  // Otherwise the content is already visible via CSS, so skip the observer.
  if (!document.documentElement.classList.contains("motion-ok")) {
    isVisible.value = true;
    return;
  }

  observer.value = new IntersectionObserver(observerCallback, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  if (observerContainer.value) {
    observer.value.observe(observerContainer.value);
  }
});

onBeforeUnmount(() => {
  observer.value?.disconnect();
});
</script>

<template>
  <div
    ref="observerContainer"
    class="fade-in"
    :class="[fromDirection, { 'is-visible': isVisible }]"
  >
    <slot />
  </div>
</template>

<style scoped>
.fade-in {
  transition:
    opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 1000ms cubic-bezier(0.22, 1, 0.36, 1);
}

/* Hidden initial state applies ONLY when motion is allowed (class set before
   first paint). No JS / reduced-motion / crawlers never hide the content. */
:global(html.motion-ok) .fade-in {
  opacity: 0;
}
:global(html.motion-ok) .fade-in.up {
  transform: translateY(-1.5rem);
}
:global(html.motion-ok) .fade-in.down {
  transform: translateY(1.5rem);
}
:global(html.motion-ok) .fade-in.left {
  transform: translateX(-1.5rem);
}
:global(html.motion-ok) .fade-in.right {
  transform: translateX(1.5rem);
}

.fade-in.is-visible {
  opacity: 1;
  transform: none;
}
</style>
