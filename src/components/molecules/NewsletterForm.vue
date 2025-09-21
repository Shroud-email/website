<script setup lang="ts">
import { ref } from "vue"

const defaultClass = ref('sm:flex')
const email = ref('')
const isLoading = ref(false)
const message = ref('')

const handleSubmit = async (event: Event) => {
  event.preventDefault()

  if (!email.value) {
    message.value = 'Please enter an email address'
    return
  }

  isLoading.value = true
  message.value = ''

  try {
    const response = await fetch('/api/subscribe/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value })
    })

    if (response.ok) {
      message.value = 'Successfully subscribed!'
      email.value = ''
    } else {
      message.value = 'Something went wrong. Please try again.'
    }
  } catch (error) {
    message.value = 'Network error. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    className: String
  }
})
</script>

<template>
  <form @submit="handleSubmit" :class="[defaultClass, className]">
    <label for="email" class="sr-only">Email address</label>
    <div v-if="message" class="text-sm mt-sm text-gray-700 flex place-content-center h-full w-full">
      {{ message }}
    </div>
    <template v-else>
      <input id="email" v-model="email" type="email" autocomplete="email" required :disabled="isLoading" class="w-full
          px-5
          py-3
          border border-gray-300
          shadow-sm
          placeholder-gray-400
          focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500
          sm:max-w-xs
          rounded-md
          bg-white
          disabled:opacity-50
          disabled:cursor-not-allowed" placeholder="Enter your email" />
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:shrink-0">
        <button type="submit" :disabled="isLoading" class="w-full
          flex
          items-center
          justify-center
          py-3
          px-5
          border border-transparent
          text-base
          font-medium
          rounded-md
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
          disabled:opacity-50
          disabled:cursor-not-allowed">
          {{ isLoading ? 'Subscribing...' : 'Subscribe' }}
        </button>
      </div>
    </template>
  </form>
</template>