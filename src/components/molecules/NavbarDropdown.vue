<script setup lang="ts">
import type { PropType } from "vue"
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue"
import { ChevronDownIcon } from "@heroicons/vue/solid/esm/index.js"

interface ChildNavItem {
  icon: any;
  name: string;
  description: string;
  href: string;
}

defineProps({
  name: String,
  children: Array as PropType<ChildNavItem[]>,
})

</script>

<template>
  <Popover class="relative" v-slot="{ open }">
    <PopoverButton
      :class="[open ? 'text-gray-300' : 'text-white', 'group rounded-md inline-flex items-center text-base font-medium hover:text-gray-300 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-offset-gray-900 focus:ring-indigo-500']">
      <span>{{ name }}</span>
      <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-white', 'ml-2 h-5 w-5 group-hover:text-gray-300']"
        aria-hidden="true" />
    </PopoverButton>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
      <PopoverPanel
        class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <a v-for="item in children" :key="item.name" :href="item.href"
              class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
              <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ item.name }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ item.description }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
