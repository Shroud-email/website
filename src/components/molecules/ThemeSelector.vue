<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, ListboxLabel } from "@headlessui/vue"
import { SunIcon, MoonIcon, DesktopComputerIcon } from "@heroicons/vue/outline/esm/index.js"
import { ref, watch } from "vue"

const themes = [
  { name: 'Light', value: 'light', icon: SunIcon },
  { name: 'Dark', value: 'dark', icon: MoonIcon },
  { name: 'System', value: 'system', icon: DesktopComputerIcon },
]

const selectedTheme = ref(themes[2])
watch(selectedTheme, () => {
  if (selectedTheme) {
    document.documentElement.setAttribute('data-theme', selectedTheme.value.value)
  } else {
    selectedTheme.value = themes.find(
      (theme) =>
        theme.value === document.documentElement.getAttribute('data-theme')
    )
  }
})
</script>

<template>
  <Listbox v-model="selectedTheme">
    <ListboxLabel class="sr-only">Theme</ListboxLabel>
    <ListboxButton
      class="flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 bg-slate-700 ring-inset ring-white/5">
      <span class="sr-only">{{selectedTheme?.name}}</span>
      <SunIcon class="hidden h-4 w-4 fill-sky-400 text-sky-400 [[data-theme=light]_&]:block" />
      <MoonIcon class="hidden h-4 w-4 fill-sky-400 text-sky-400 [[data-theme=dark]_&]:block" />
      <SunIcon class="hidden h-4 w-4 fill-slate-400 text-slate-400 [:not(.dark)[data-theme=system]_&]:block" />
      <MoonIcon class="hidden h-4 w-4 fill-slate-400 text-slate-400 [.dark[data-theme=system]_&]:block" />
    </ListboxButton>
    <ListboxOptions
      class="absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 bg-slate-800 ring-white/5">
      <ListboxOption v-for="theme in themes" as="template" :key="theme.value" :value="theme" v-slot="{ active, selected}">
        <li :class="{
          'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1': true,
          'text-sky-500': selected,
          'text-white': active && !selected,
          'text-slate-400': !active && !selected,
          'bg-slate-900/40': active,
        }">
          <div
            class="rounded-md p-1 shadow ring-1 bg-slate-700 ring-inset ring-white/5">
            <component :is="theme.icon" class="h-4 w-4" :class="{ 'fill-sky-400': selected, 'fill-slate-400': !selected}" />
          </div>
          <div class="ml-3">{{theme.name}}</div>
        </li>
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>