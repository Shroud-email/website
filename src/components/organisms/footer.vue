<script setup lang="ts">
import { shallowRef, defineComponent, h } from "vue";
import { CodeIcon } from "@heroicons/vue/outline/esm/index.js"

const footer = shallowRef([
  {
    name: "GitLab",
    href: "https://gitlab.com/shroud/shroud.email",
    icon: CodeIcon,
  },
]);

// usePlausible()
// usePapercups()
</script>

<template>
  <footer class="bg-gray-800 mt-auto">
    <div
      class="max-w-7xl mx-auto pt-12 px-4 pb-20 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="/privacy" class="text-gray-300 hover:text-gray-400">Privacy</a>
        <a
          href="https://shroud.appsignal-status.com/"
          class="text-gray-300 hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
          >System status</a
        >
        <a
          v-for="item in footer"
          :key="item.name"
          :href="item.href"
          class="text-gray-300 hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-gray-300">
          Copyright &copy; 2021 - All rights reserved.
          <a href="mailto:hello@shroud.email" class="underline"
            >Contact us.</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>
