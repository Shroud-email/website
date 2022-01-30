<script setup lang="ts">
import { shallowRef, defineComponent, h } from "vue";
import { CodeIcon } from "@heroicons/vue/outline"

const footer = shallowRef([
  {
    name: "Twitter",
    href: "https://twitter.com/ShroudEmail",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
          }),
        ]),
    }),
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/shroudemail",
    icon: defineComponent({
      render: () =>
        h(
          "svg",
          {
            fill: "currentColor",
            viewBox: "0 0 2800 2800",
            x: "0px",
            y: "0px",
          },
          [
            h("g", {}, [
              h("g", {}, [
                h("path", {
                  d: "M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600 V1300z",
                }),
                h("rect", { x: "1700", y: "550", width: "200", height: "600" }),
                h("rect", { x: "1150", y: "550", width: "200", height: "600" }),
              ]),
            ]),
          ]
        ),
    }),
  },
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
