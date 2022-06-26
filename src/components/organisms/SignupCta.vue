<script setup lang="ts">
import FadeIn from "~/components/atoms/FadeIn.vue"
</script>

<template>
  <div class="bg-indigo-700">
    <FadeIn>
      <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block">Protect your email privacy.</span>
          <span class="block">Try Shroud.email today.</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-indigo-200">Start your free 30-day trial, no credit card needed.</p>
        <a href="https://app.shroud.email/users/register" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
          Sign up
        </a>
      </div>
    </FadeIn>
  </div>
</template>