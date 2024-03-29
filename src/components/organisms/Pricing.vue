<script setup lang="ts">
import { shallowRef } from "vue"

const features = shallowRef([
  "Unlimited aliases",
  "Advanced tracker blocking",
  "Block spammy senders at will",
  "Premium customer support",
])
// Should be an even number to look nice
const questions = shallowRef([
  {
    question: "Do you have any discounts?",
    answer:
      "If you're an activist or journalist, get in touch on hello@shroud.email and we'll see what we can do.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer:
      "The service will continue for the remainder of the billing period. Then, you won't be able to create new aliases. All your existing aliases will continue to work.",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "We support Visa, Mastercard, American Express, Discover, Diners Club, China UnionPay (CUP), and Japan Credit Bureau (JCB).",
  },
  {
    question: "What's your refund policy?",
    answer:
      "As we have a 30-day free trial with no limitations, we don't offer refunds.",
  },
  {
    question: "Does Shroud.email forward attachments?",
    answer: "Yes, we forward attachments up to 25MB.",
  },
  {
    question: "Is Shroud.email a disposable email service?",
    answer: "No, email aliases are permanent. You can disable or delete them if you don't want to receive emails through them, however.",
  },
])
const price = shallowRef({
  yearly: 20,
  monthly: 2,
})
const currentBillingPeriod = shallowRef<"yearly" | "monthly">("monthly")
</script>

<template>
  <div class="pt-12">
    <div class="bg-gray-100">
      <div class="pt-12 sm:pt-16 lg:pt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl font-display">
              One simple plan for everything
            </h1>
            <p class="mt-4 text-xl text-gray-600">
              Try for free for 30 days, no credit card needed.
            </p>
          </div>
        </div>
      </div>
      <div
        class="relative self-center px-4 sm:px-6 lg:px-8 mt-6 bg-gray-100 rounded-lg p-0.5 flex justify-center sm:mt-8">
        <button @click="currentBillingPeriod = 'monthly'" type="button"
          :class="currentBillingPeriod === 'monthly' ? 'border-gray-200 shadow-sm bg-white text-gray-900 underline' : 'border-transparent text-gray-700'"
          class="relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">
          Monthly billing
        </button>
        <button @click="currentBillingPeriod = 'yearly'" type="button"
          :class="currentBillingPeriod === 'yearly' ? 'border-gray-200 shadow-sm bg-white text-gray-900 underline' : 'border-transparent text-gray-700'"
          class="ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">
          Yearly billing
        </button>
      </div>
      <div class="mt-2 bg-white pb-16 sm:mt-4 sm:pb-20 lg:pb-28">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-gray-100"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
            <div class="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Shroud.email
                </h3>
                <p class="mt-6 text-base text-gray-500">
                  Hide your email address and block trackers with unlimited
                  aliases.
                </p>
                <div class="mt-8">
                  <div class="flex items-center">
                    <h4
                      class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      What's included
                    </h4>
                    <div class="flex-1 border-t-2 border-gray-200"></div>
                  </div>
                  <ul role="list" class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    <li v-for="feature in features" :key="feature" class="flex items-start lg:col-span-1">
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: solid/check-circle -->
                        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                          fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd" />
                        </svg>
                      </div>
                      <p class="ml-3 text-sm text-gray-700">
                        {{ feature }}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p class="text-lg leading-6 font-medium text-gray-900">
                  Paid {{ currentBillingPeriod }}
                </p>
                <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>£{{ price[currentBillingPeriod] }}</span>
                  <span class="ml-3 text-xl font-medium text-gray-500">
                    GBP
                  </span>
                </div>
                <!-- <p class="mt-4 text-sm font-medium text-gray-500">
                  Or £2/month if paid monthly
                </p> -->
                <div class="mt-6">
                  <div class="rounded-md shadow">
                    <a href="https://app.shroud.email/settings/billing"
                      class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                      Sign up
                    </a>
                  </div>
                </div>
                <div class="mt-4 text-sm font-medium text-gray-900">
                  <a href="https://app.shroud.email/users/register" class="font-medium text-gray-900">
                    Or sign up for a free trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">
            Frequently asked questions
          </h2>
          <p class="mt-4 text-gray-400">
            If your question isn't answered here, please
            <a href="mailto:hello@shroud.email" class="underline">contact us.</a>
          </p>
        </div>
        <div class="mt-20">
          <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            <div v-for="{ question, answer } in questions" :key="question">
              <dt class="font-semibold text-white">
                {{ question }}
              </dt>
              <dd class="mt-3 text-gray-400">
                {{ answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>