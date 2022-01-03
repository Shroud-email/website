<script setup lang="ts">
import { shallowRef } from "vue"

const questions = shallowRef([
  {
    question: "How does Shroud.email work?",
    answer:
      'Shroud.email sits between senders and your real email address, like a proxy or VPN for email. You create an email alias like e.g. "yjisgqytbiajss@fog.shroud.email". Any emails sent to this alias will be forwarded to your real address, without the trackers.',
  },
  {
    question: "Does Shroud.email log my emails?",
    answer:
      "Emails are only stored for a short time until they're forwarded -- usually a few seconds. Our email provider, OhMySMTP, stores emails for five days to ensure that they're delivered correctly.",
  },
  {
    question: "Does Shroud.email forward attachments?",
    answer: "Not yet, but we're working on it!",
  },
])
</script>

<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 class="text-3xl font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Can't find the answer you're looking for?
            <a
              href="mailto:contact@shroud.email"
              class="font-medium text-indigo-600 hover:text-indigo-500"
              >Contact us.</a
            >
          </p>
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2">
          <dl class="space-y-12">
            <div v-for="{ question, answer } in questions" :key="question">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                {{ question }}
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                {{ answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
