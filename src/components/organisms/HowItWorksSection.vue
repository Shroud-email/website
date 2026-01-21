<script setup lang="ts">
import {
  ArrowRightCircleIcon,
  EyeSlashIcon,
  TrashIcon,
} from "@heroicons/vue/24/outline";

import FadeIn from "../atoms/FadeIn.vue";

const howItWorksSteps = [
  {
    id: 1,
    name: "Forward emails...",
    description:
      "All emails sent to your aliases will be forwarded on to your real email address. You never need to give out your real address again!",
    icon: ArrowRightCircleIcon,
  },
  {
    id: 2,
    name: "...Minus the trackers.",
    description:
      "Our advanced tracker blocking strips out trackers from your emails, so the sender can't snoop on your inbox.",
    icon: EyeSlashIcon,
  },
  {
    id: 3,
    name: "Don't worry about spam.",
    description:
      "When you no longer need an alias, you can simply delete it. Or if there's just a single sender who's bugging you, you can block them!",
    icon: TrashIcon,
  },
];
</script>

<template>
  <div class="py-16 bg-white overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404"
        height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x="0" y="0" width="20" height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-slate-100" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>

      <div class="relative">
        <FadeIn>
          <h2 class="text-center text-3xl leading-snug font-bold tracking-tight text-slate-950 sm:text-4xl max-w-3xl mx-auto font-display">
            Spammers
            and marketers don't just see your email address, they see
            dollar signs.</h2>
          <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-slate-600">
            Your address is harvested, sold, and used to follow you across the Internet. Tracking pixels tell senders
            when, and where, you open their emails.
          </p>
        </FadeIn>
      </div>

      <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784"
        fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-slate-100" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="lg:col-start-2">
            <FadeIn fromDirection="right">
              <h3 class="text-2xl font-bold text-slate-950 tracking-tight sm:text-3xl font-display">How it works</h3>
              <p class="mt-3 text-lg text-slate-600">
                The next time a website asks for your email, use Shroud.email to create a unique alias that hides your
                identity.
              </p>

              <dl class="mt-10 space-y-10">
                <div v-for="item in howItWorksSteps" :key="item.id" class="relative">
                  <dt>
                    <div
                      class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-slate-950 font-display">{{ item.name }}</p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-slate-600">
                    {{ item.description }}
                  </dd>
                </div>
              </dl>

            </FadeIn>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <FadeIn fromDirection="left">
              <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784"
                height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                <defs>
                  <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20"
                    patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-slate-100" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img class="relative mx-auto" width="490" height="397" src="/img/howitworks.png"
                alt="a list of emails marked as 'blocked', 'trackers removed', or 'forwarded'" />

            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
