---
layout: '../../layouts/ComparisonLayout.astro'
title: Firefox Relay alternative
description: |-
  We may be new on the block, but we think we stack up pretty well.
---

Firefox Relay is an email alias service. Like Shroud.email, it lets you create unlimited aliases. Both services are open source and let you reply to emails received via your aliases. However, when it comes to privacy, Shroud.email has several unique features.

## Third parties

Firefox Relay uses Amazon's Simple Email Service (SES) under the hood. This means that all emails that go through your aliases are sent via Amazon's servers, with Amazon able to read them. Doesn't Big Tech know enough about you already?

In contrast, we run our own mailserver to minimize our reliance on third parties.

## Tracking pixels

Emails often contain tracking pixels that tell the sender when and where you opened their emails. We find that creepy! Shroud.email doesn't just block known trackers, we even block ones we haven't seen before, too. And to be on the safe side, we route all images through our own servers so that senders never learn your IP address.

Firefox Relay does not block tracking pixels.

## Block individual senders

If one of your Firefox Relay aliases starts receiving spam, your only choice is to disable it entirely. With Shroud.email, you can block individual senders so you don't lose other emails sent to the alias. Though you can of course disable or delete the alias if you like!

<img src="/img/block-sender.png" alt="Web UI showing how to block a sender in Shroud.email" class="max-w-full sm:max-w-[572px] mx-auto" />

## Renewable energy

Shroud.email runs on 100% renewable energy in the EU. We're hosted on [Hetzner](https://www.hetzner.com/unternehmen/umweltschutz/) in Germany which uses hydropower.

Firefox Relay is hosted in the USA on Google Cloud, which is carbon neutral, but still relies on fossil fuels. It also uses Amazon Web Services, which is not carbon neutral.

## Other features

Shroud.email doesn't yet have a browser extension, though it's on our [roadmap](/roadmap/). If this is crucial for you, you might be better off starting with Firefox Relay -- though we recommend signing up for our [newsletter](/newsletter/) to learn when we have our browser extension ready!

## Summary

Shroud.email's privacy features go beyond what Firefox Relay offers. With tracker blocking, we prevent spammers and marketers from learning about your email reading habits.

We don't use Big Tech's infrastructure, so Amazon doesn't get *even more* data about you. And not only that: we run on renewable energy, too.

If you're looking for a privacy-focused and user-friendly email alias service, try Shroud.email!
