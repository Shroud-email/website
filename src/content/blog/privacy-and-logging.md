---
title: Responsible logging
description: How we debug with privacy in mind.
date: 2022-05-21
image: /img/data-graphs.jpg
imageAlt: graphs on a computer screen
---

When we were first prototyping Shroud.email, it was easy to fix any bugs that came up. There were no users, so we could keep detailed information about the emails that we forwarded. These logs helped us iron out all the early issues.

Now, such logs are the last thing we want to store. We don't want to know who's emailing you or what they're saying -- Shroud.email is designed to be a simple relay that retains no information. But there's a problem: what happens when someone notices a bug? Perhaps an email arrived later than expected, or some formatting in the email looked a bit off. Without logging, there's very little information to go off when it comes to fixing the error!

When a bug comes up, we always try to reproduce the problem ourselves first. If we can do that, then it's easy to resolve. However, sometimes we need more information. But with no logs, what do we do?

Our solution is to add a switch that can be used to temporarily and transparently turn on logging for a given user. If a customer notices a problem, we can flip this switch and ask them to re-send the problematic email. Once we have the logs we need, we can immediately un-flip the switch.

Of course, it'd be pretty creepy if this functionality could be toggled in secret. While logging is enabled, we show an alert to the user on every page:

<img src="/img/logging-enabled.png" alt="Shroud.email with a logging enabled alert" class="max-w-full mx-auto" />

We'll only ever enable logging if a user asks us to, and we'll turn it off as soon as we can afterwards.

This lets us build the private-by-default product that we and our users want, while still being able to address any problems that might come up. Privacy-preserving software like ours should be a pleasure to use and free of bugs. By following the priciples of [privacy by design](https://en.wikipedia.org/wiki/Privacy_by_design) -- like privacy by default and transparency -- we can build high-quality software without any unnecessary data collection.
