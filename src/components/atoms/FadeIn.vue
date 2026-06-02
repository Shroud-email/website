<script setup lang="ts">
import type { PropType } from "vue";

type Direction = "up" | "down" | "left" | "right";

defineProps({
  fromDirection: {
    type: String as PropType<Direction>,
    default: "up",
  },
});
</script>

<template>
  <!-- Reveal is driven by the global IntersectionObserver in BaseLayout against
       the .fade-in class, gated on `motion-ok`. No reactive state here so Vue
       hydration never fights the observer-added `is-visible` class. -->
  <div class="fade-in" :class="fromDirection">
    <slot />
  </div>
</template>
