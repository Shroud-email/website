<script setup>
import FadeIn from "~/components/atoms/fade-in.vue"
import OpenGraph from "~/components/open-graph.vue"

import HeroSection from "~/components/organisms/hero-section"
import FeatureSection from "~/components/organisms/feature-section"
import NewsletterSection from "~/components/organisms/newsletter-section"
import useIsIndexPage from "~~/composables/useIsIndexPage"

const isIndexPage = useIsIndexPage()

onMounted(() => {
  isIndexPage.value = true
})
onBeforeUnmount(() => {
  isIndexPage.value = false
})
</script>

<template>
  <div>
    <Meta
      name="description"
      content="Protect your email privacy with unlimited aliases that block trackers."
    />
    <OpenGraph title="Shroud.email - Protect your email privacy" url="https://shroud.email/" />
    <Title>Shroud.email - Protect your email privacy</Title>
    <HeroSection learn-more-id="#learn-more" />

    <div id="learn-more" class="bg-gray-50 py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Spammers and marketers don't just see your email address, they see
              dollar signs.
            </h2>
            <p class="mt-3 text-xl text-gray-500 sm:mt-4">
              Your address is harvested, sold, and used to follow you across the
              Internet. Tracking pixels tell senders when, and where, you open
              their emails.
            </p>
            <p class="mt-3 text-xl text-gray-500 sm:mt-4">
              The next time you encounter a website asking for your email, use
              Shroud.email to create a unique alias that hides your real identity.
              Any emails will be forwarded to your real address, without the
              trackers.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>

    <FeatureSection />
    <NewsletterSection id="newsletter" />
  </div>
</template>
