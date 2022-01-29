<template>
  <div class="bg-indigo-700">
    <div
      class="
        max-w-4xl
        mx-auto
        px-4
        pb-16
        pt-12
        sm:px-6 sm:pt-20 sm:pb-24
        lg:max-w-7xl lg:px-8
      "
    >
      <div
        class="
          grid grid-cols-1
          gap-x-6 gap-y-12
          sm:grid-cols-2
          lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16
        "
      >
        <FadeIn v-for="feature in features" :key="feature.name">
          <div>
            <span
              class="
                flex
                items-center
                justify-center
                h-12
                w-12
                rounded-md
                bg-white bg-opacity-10
              "
            >
              <component
                :is="feature.icon"
                class="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white">{{ feature.name }}</h3>
            <p class="mt-2 text-base text-indigo-200">
              {{ feature.description }}
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  BanIcon,
  CodeIcon,
  MailIcon,
  GlobeIcon,
  EyeOffIcon,
  DotsHorizontalIcon,
} from "@heroicons/vue/outline"

import FadeIn from "../atoms/FadeIn.vue"

const features = [
  {
    name: "Unlimited aliases",
    description:
      "Create a new alias every time a website asks for your email address. No arbitrary limits here.",
    icon: MailIcon,
  },
  {
    name: "Stop spammers in their tracks",
    description:
      "Block spammy senders at will, or give your alias a holiday by disabling it entirely.",
    icon: BanIcon,
  },
  {
    name: "Block trackers",
    description:
      "Senders don't need to know if or when you've seen their emails. Shroud.email removes tracking pixels so your privacy remains intact.",
    icon: EyeOffIcon,
  },
  {
    name: "Fully open-source",
    description:
      "Every part of Shroud.email is open source, licensed under the AGPL v3 license.",
    icon: CodeIcon,
  },
  {
    name: "Privacy shouldn't cost the earth",
    description:
      "Shroud.email runs on 100% renewable energy, hosted in the EU.",
    icon: GlobeIcon,
  },
  {
    name: "And a lot more to come",
    description:
      "We have a whole lot of additional features planned. Stay tuned.",
    icon: DotsHorizontalIcon,
  },
]
export default {
  components: {
    FadeIn,
  },
  setup() {
    return {
      features,
    }
  },
}
</script>
