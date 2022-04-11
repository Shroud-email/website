<script setup lang="ts">
import { shallowRef, ref, computed, onMounted, onBeforeUnmount, toRefs } from "vue"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue"
import { MenuIcon, XIcon } from "@heroicons/vue/outline"

const props = defineProps({
  transparentAtTop: {
    type: Boolean,
    default: false,
  },
})

const { transparentAtTop } = toRefs(props)

const navigation = shallowRef([
  { name: "Privacy protection", href: "/privacy-protection" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
])

const isScrolledToTop = ref(true)
const handleScroll = () => {
  isScrolledToTop.value = window.scrollY === 0
}

const backgroundColor = computed(() => {
  if (transparentAtTop.value && isScrolledToTop.value) return "bg-transparent"

  return "bg-gray-900"
})

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <Popover as="header" class="relative">
    <div :class="backgroundColor" class="py-3 h-16 flex items-center fixed top-0 left-0 right-0 z-10 transition-colors ease-in-out duration-500">
      <nav
        class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 flex-grow"
        aria-label="Global"
      >
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="/" class="text-gray-100 flex items-center font-semibold text-xl">
              <svg
                class="w-6 h-6 mr-3 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 900 900"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M857.793543,640.527693 C786.052223,793.814748 630.426559,900 450,900 C415.299912,900 381.517158,896.072426 349.072035,888.637574 Z M897.121,398.815174 C899.02295,415.613814 900,432.692806 900,450 C900,470.570531 898.619761,490.818689 895.946842,510.656917 L223.221723,838.763897 C190.827668,819.826598 161.013181,796.956271 134.433288,770.807943 Z M830.084994,208.987702 C847.878637,236.990332 862.662845,267.092913 873.982439,298.840269 L69.9150057,691.012298 C52.1213626,663.009668 37.337155,632.907087 26.0175608,601.159731 Z M676.778277,61.2361026 C709.172332,80.1734019 738.986819,103.043729 765.566712,129.192057 L2.87899982,501.184826 C0.977049545,484.386186 0,467.307194 0,450 C0,429.429469 1.3802389,409.181311 4.05315767,389.343083 Z M450,0 C484.700443,0 518.483534,3.92765489 550.928962,11.3626549 L42.2064569,259.472307 C113.947777,106.185252 269.573441,0 450,0 Z"
                  id="Combined-Shape"
                />
              </svg>
              Shroud.email
            </a>
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
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-base font-medium text-white hover:text-gray-300"
            >{{ item.name }}</a>
          </div>
        </div>
        <div class="hidden md:flex md:items-center md:space-x-6">
          <a
            href="https://app.shroud.email/users/log_in"
            class="text-base font-medium text-white hover:text-gray-300"
          >Log in</a>
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
        <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <a href="/" class="logo h-8 text-slate-800">Shroud.email</a>
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
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
              >{{ item.name }}</a>
            </div>
            <div class="mt-6 px-5">
              <a
                href="https://app.shroud.email/users/log_in"
                class="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
              >Log in</a>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>