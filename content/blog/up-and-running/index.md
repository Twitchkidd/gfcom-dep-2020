---
title: Up And Running!
date: "2020-03-16T11:38:03.284Z"
description: "Up And Running!"
---

Alright, let's do this thing!

I'm switching the whole site over to Gatsby rather than just a part of it, using gatsby-starter-blog, and so I'm going to go through this plugin by plugin and see what's up here.

Starting with gatsby-plugin-google-analytics! Sweet! Learned I was still a part of the Fastblr analytics account, lol! That was a blog I got paid to write for a few years ago, didn't really go anywhere, but hey, I can say I've been paid to write! Okay, account created for this site, tracking ID plugged in, and I followed the instructions on [Neil Patel's site](https://neilpatel.com/blog/protect-analytics-from-hacking/) to protect the traffic data from being corrupted. Thanks Neil!

Let's see if I can launch the thing and record a hit ... //

Lol, well, launch, check, today we learned Google Analytics is not realtime though.

Just tightened the bolts in this desk, omg, so much better. It was rattling as I typed, that was driving me crazy. Okay, page launched, dog walked, desk tightened, does /bounce still work? What's that called? Asking Reactiflux ... "server routing" or "serving static files," so maybe I can say that ... well I mean, Gatsby is still rendering routes statically, but I'm using server routing to render the /bounce route with just a set of html, css, and javascript files.

Yay it still works! This is the silliest thing, but I made a page that spawns a random-ish number of red balls that bounce around on a blue background in random-ish directions at random-ish speeds, and it's definitely not the most advanced thing in the world, lol, but I made it so long ago, and was so proud of myself for working through the problems and getting it to work that going to [garethfield.com/bounce](https://www.garethfield.com/bounce) has always been a comfort, though it's like one pixel off to the right and bottom so it scrolls just a little, frantically, lol, but that's a thing to fix at a later time.

Alright, next up, gatsby-plugin-react-helmet, and here I'm going to have to dig into a few things, because I get what Helmet generally does, it adds meta info and all that jazz, but looking at the SEO component, I'm going to have to look up the useStaticQuery function at least. I think I remember this being part of the new hotness that Gatsby is allowing for around having some of your content be dynamically generated, let's see if I'm right. Sweet, right on, used to have PageQuery that took in context and could only be called at the page level and StaticQuery that took in no context but could be called on any component, and now we've got the useStaticQuery hook.

I thought hooks were going to be crazy hard to learn, I think taking a step back into plain javascript land for a bit did me a load of good. Yay for [Wes Bos' Beginner JavaScript course!](beginnerjavascript.com)

Okay, so instead of using the Helmet component directly, there's an SEO component that takes in a title (required,) and optionally a description, lang, and array of metas, and adds a bunch by default from the site data ... where does that live again? It's been a while since I've really worked on a Gatsby site, like the Bruckner Oncology project :( gatsby-config, right. I wonder if I should ... yes, lol, the answer is yes, I should make a Twitter account again. I will take a deep breath before tweeting this time around, I promise, lol.

Ooo, that's one sleek form, Twitter. Also, I am _really_ used to verification by sms at this point. That was one of the coolest things we got working at the AWS meetup around Amplify and MobileHub and all that jazz.

Alright beezleys, it's [@barefootgareth](twitter.com/barefootgareth) to y'all!

Oh, so easily distracted ... took off on a js package managers journey because Microsoft just bought NPM (...eep,) and then a little journey on Chakra UI, which looks dope and has a Gatsby plugin! Where were we though, metadata, metadata ... Okay, definitely at a concentration limit, time for a groceries run and another walk for Dawa! // (btw, for whatever reason in my notes, I tend to leave a '//' where I leave off for a while, and a '///' for like a major break, like next day or later usually. Looking forward to getting my paper notes scanned!)
