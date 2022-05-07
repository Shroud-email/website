<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue"

defineProps({
  children: Array,
  slug: String,
  current: Boolean,
  name: String,
})
const getPath = (slug) => `/docs/${slug}`
</script>

<template>
  <div v-if="!children">
    <a :href="getPath(slug)" :class="[current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md']">
      {{ name }}
    </a>
  </div>
  <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">
    <DisclosureButton :class="[current ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500']">
      <svg :class="[open ? 'text-gray-400 rotate-90' : 'text-gray-300', 'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
      </svg>
      {{ name }}
    </DisclosureButton>
    <DisclosurePanel class="space-y-1">
      <DisclosureButton v-for="subItem in children" :key="subItem.name" as="a" :href="getPath(subItem.slug)" class="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50">
        {{ subItem.name }}
      </DisclosureButton>
    </DisclosurePanel>
  </Disclosure>
</template>