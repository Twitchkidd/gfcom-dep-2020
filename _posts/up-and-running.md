---
title: Up And Running!
date: "2020-03-16T11:38:03.284Z"
description: "Gareth gets his blog up and running!"
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

Whooooops, broke production! First of many, most likely, let's dig in!

Eugh, so weird, I rebuilt it and pushed index.html over, and it works, but none of the newer blog content is there and the profile image is super wonky. I also am losing steam a little, and maybe should switch tasks so I stay interested, because honestly ... I really love this stuff because it's so cool writing code and talking with the machine and making something awesome for people, and I really need to work hard at it because there's a lot of surface area, and frankly I'm not that smart, and it's my best shot at not cleaning toilets the rest of my life ... ahhh, I think the back pain is taking over the conversation at this point :(

Okay, let me just see if replacing everything gatsby-related has the site still working, so I know I'm not going crazy at least and can start from relatively fresh, though! I must say, I changed my GitHub password because I had a login from France on a different service and probably don't have the best password security, and then my git stuff broke earlier, and I was reminded very quickly how much I don't really know about git and ssh and credentials.

Or how much I have to learn! Got to stay positive! Got to call it, after this, too, I'm going to get Dawa's dinner going, fetch the laundry, and try and get a good night's sleep, and hopefully I don't have the plague, here (search for the news on this date, lol. I called out tomorrow because I have a bit of a throat/upper respiratory/lower GI thing going on and don't want to risk it-slash-need a mental health day after yesterday's shift, holy moley ...) So!

Best wishes! ~g
