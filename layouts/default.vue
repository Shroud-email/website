<script setup lang="ts">
import { shallowRef } from "vue"

const navigation = shallowRef([
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
])

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
          ],
        ),
    }),
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/shroud/shroud.email",
    icon: CodeIcon,
  },
])

usePlausible()
usePapercups()
useMeta({
  htmlAttrs: { class: "h-full scroll-smooth", lang: "en" },
  bodyAttrs: { class: "h-full" },
})
</script>

<template>
  <div class="min-h-full flex flex-col">
    <Popover as="header" class="relative">
      <div class="bg-gray-900 py-3 h-16 flex items-center">
        <nav
          class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 flex-grow"
          aria-label="Global"
        >
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <NuxtLink to="/" class="logo text-gray-100"
                >Shroud.email</NuxtLink
              >
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton
                  class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                >
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-8 md:flex md:ml-10">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="text-base font-medium text-white hover:text-gray-300"
                >{{ item.name }}</NuxtLink
              >
            </div>
          </div>
          <div class="hidden md:flex md:items-center md:space-x-6">
            <a
              href="https://app.shroud.email/users/log_in"
              class="text-base font-medium text-white hover:text-gray-300"
            >
              Log in
            </a>
          </div>
        </nav>
      </div>

      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div
            class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <NuxtLink to="/" class="logo h-8 text-slate-800"
                  >Shroud.email</NuxtLink
                >
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="pt-5 pb-6">
              <div class="px-2 space-y-1">
                <NuxtLink
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</NuxtLink
                >
              </div>
              <div class="mt-6 px-5">
                <a
                  href="https://app.shroud.email/users/log_in"
                  class="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                  >Log in</a
                >
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>

    <main>
      <slot />
    </main>

    <footer class="bg-gray-800 mt-auto">
      <div
        class="max-w-7xl mx-auto pt-12 px-4 pb-20 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex justify-center space-x-6 md:order-2">
          <NuxtLink to="/privacy" class="text-gray-300 hover:text-gray-400"
            >Privacy</NuxtLink
          >
          <a
            href="https://shroud.appsignal-status.com/"
            class="text-gray-300 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            System status
          </a>
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
            <a href="mailto:contact@shroud.email" class="underline"
              >Contact us.</a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue"
import { MenuIcon, XIcon } from "@heroicons/vue/outline"
import { CodeIcon } from "@heroicons/vue/solid"

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
}
</script>

<style scoped>
.logo {
  @apply text-xl hover:text-gray-300;
  font-family: "Carter One", sans-serif;
}
</style>
