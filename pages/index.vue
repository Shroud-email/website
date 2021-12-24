<template>
  <div>
    <div class="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden bg-gray-800">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div
            class="
              mx-auto
              max-w-md
              px-4
              sm:max-w-2xl sm:px-6 sm:text-center
              lg:px-0 lg:text-left lg:flex lg:items-center
            "
          >
            <div class="lg:py-24">
              <h1
                class="
                  mt-4
                  text-4xl
                  tracking-tight
                  font-extrabold
                  text-white
                  sm:mt-5 sm:text-6xl
                  lg:mt-6
                  xl:text-6xl
                "
              >
                <span class="block">Email,</span>
                <span class="block text-indigo-400">meet privacy.</span>
              </h1>
              <p
                class="
                  mt-3
                  text-base text-gray-300
                  sm:mt-5 sm:text-xl
                  lg:text-lg
                  xl:text-xl
                "
              >
                Your email address is your
                <span class="italic">de facto</span> ID on the web. Protect it
                with unlimited, disposable aliases that remove trackers and
                forward to your real email address.
              </p>
              <div class="mt-10 sm:mt-12">
                <a
                  href="#newsletter"
                  class="
                    py-3
                    px-4
                    rounded-md
                    shadow
                    bg-indigo-500
                    text-white
                    font-medium
                    hover:bg-indigo-600
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-300
                    focus:ring-offset-gray-900
                  "
                >
                  <MailIcon class="inline h-5 w-5 mr-2" />
                  Join the waitlist
                </a>
              </div>
            </div>
          </div>
          <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div
              class="
                mx-auto
                max-w-md
                px-4
                sm:max-w-2xl sm:px-6
                lg:max-w-none lg:px-0
              "
            >
              <img
                class="
                  w-full
                  lg:absolute
                  lg:inset-y-0
                  lg:left-0
                  lg:h-full
                  lg:w-auto
                  lg:max-w-none
                "
                src="~/assets/img/hero-illustration.png"
                alt="Abstract illustration: email and shield"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
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
        </div>
      </div>
    </div>
    <FeatureSection />
    <NewsletterSection id="newsletter" />
  </div>
</template>

<script>
import { MailIcon } from "@heroicons/vue/solid"

import FeatureSection from "~/components/organisms/feature-section"
import NewsletterSection from "~/components/organisms/newsletter-section"

export default {
  components: {
    FeatureSection,
    NewsletterSection,
    MailIcon,
  },
}
</script>
