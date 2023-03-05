---
title: Custom domains
description: Bring your own domain to Shroud.email
---

Custom domains allow you to bring your own domains to Shroud.email. They let you create aliases that you're fully in control of, and you can set the address to be anything you like -- no more random bits of text!

For example, you could create an alias called `substack@mydomain.com` to use for newsletters on Substack, and another alias called `spotify@mydomain.com` to use for Spotify. Because the aliases are on your domain, you don't get locked in to Shroud.email -- you can always re-create these addresses somewhere else.

## Setup

To add a custom domain, visit the [Domains page](https://app.shroud.email/domains) and click "Add domain":

![GIF showing how to create a custom domain](/img/create-custom-domain.gif)

From there, you'll need to set up a number of DNS records to verify that the domain really belongs to you, and to ensure email deliverability. You'll see the required DNS records in the app.

We require a number of DNS records to be set up:

| DNS record          | Purpose                                                      |
| :------------------ | :----------------------------------------------------------- |
| `shroud-verify` TXT | Prove that the domain belongs to you                         |
| MX record           | Tell senders to direct emails to the Shroud.email mailserver |
| SPF record          | Prevent others from forging emails from your domain          |
| DKIM record         | Prevent email spoofing                                       |
| DMARC record        | Prevent email spoofing                                       |

Once that's done, you can create aliases with this domain:

![GIF showing how to create an alias on a custom domain](/img/create-custom-alias.gif)

That's it! Now you can send and receive emails with your custom email alias.

## Catch-all

Once you've set up your domain, you can choose to enable catch-all. If you do this, you don't need to create aliases manually: emails sent to any address on your domain with automatically create the alias if it doesn't already exist.

With catchall, you no longer need to visit Shroud.email to use aliases. Instead, you can just make up an alias on the spot whenever a website asks for one!

![GIF showing how to create an alias on a custom domain](/img/domain-catchall.png)
