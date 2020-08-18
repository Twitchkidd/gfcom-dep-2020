---
title: Boots Economics
date: '2020-08-17T09:25:34.149Z'
description: 'In which Gareth turns it down, then up again!'
---

Good morning! Today is going pretty well so far, I had an uninterrupted night's sleep last night, which is **bonkers**, up bright and early and made green tea instead of coffee first thing, we're going to pretend that the second, longer walk with Dawa was blissful and soothing and that I have no worries whatsoever, for the moment. I've got a coffee now, Dawa's lying down and has stopped panting, and I'm listening to an artist named Saib, who if you haven't heard of, go listen immediately and just leave it on. So chill.

Coding time! Since the main machine is upgrading its operating system, I'm on the backup, and I'm sure it was up-to-date at some point yesterday, but I pulled in any changes, and wow, yea, that was about right, I wrote somewhere in the five to six hundred lines of code range. The next part isn't going to be as volumnuous, just a bit more difficult. Let's go!

Lol, of course an 800 number calls me right then. Getting real cozy with that feeling of not being able to make any headway, lol. Right, keep going!

Here's a little mystery for us, why does Layout.js keep getting renamed with a lowercase 'l'? I swear I've changed this file name a dozen times.

Anyway, Layout needs going over, PostBody ... oh hey, cool things, you can use .load foo.js instead of a require from the Node repl, and I get autocomplete in the repl somehow, I wonder if that's new (zsh?) or I just never noticed, lol. Mostly I use nodemon for Node development, but I just want to see that the post loaders are working. Whoops, can't import from outside of a module, wah wah, copy paste time.

Oh, good thing I did, Next expects a directory with markdown files, Gatsby expected a directory with a directory for each post and an index.md in each. Now, do I want to switch how Next takes in posts, or change the posts directory? The thing is, images used to be in 'scope' by being in those folders, I legit am not sure how to proceed. That's why I make the big bucks, though, right? ;) (Google-ing it first, lol, this is how devs do.)

Okay, tomorrow when it's time to concentrate, the phone gets put on airplane mode. Process!

Oooh, there's a sweet image optimization library for Next! I don't know if it's still going to include every single image in the first load of the site though ... ooohkay, so ... so everything can go ahead and live in the /public/static folder, then the url is provided by [slug].js's getStaticProps, and hopefully only fetched when it needs to be? I should test it, but yea, okay ... sooo ... oh, darn that works for pages and components, but not with markdown file processing. So do I do this in markdownToHtml with remark somehow?

Here's the plan: just made myself a burger (first meat dish in like ... ?) and put some down for Dawa, saved the rest for him for tomorrow, I'm going to go take a couple ducets out so I can do laundry, get that put in, take Dawa to the park, then when the laundry is good to switch over, I'm going to do that and then head to someplace with a bench or something so I can be totally focused and bust this posts/image thing out, then when I get back it's going to be a big cleaning afternoon, with some eBay/Craigslist-partay action, get that paperwork I've been meaning to fill out for like a week filled out, end racism, save the world, bada-bing, bada-boom.

Or I could get horribly sick. Ever bite into a burger and think, "Oh no. The middle isn't hot. This is manager's special beef." And _then_ think, "Well, we're here already," and eat the rest of the burger?

Look, the world is full of uncertainty. Sometimes you just gotta roll the dice. Send it? F\*\*\*\*'n **sent.**

// Sweet, looks like remark-images might work, remark's use() is chainable, but what's the url going to be?

Alright, Layout is ... well, it's something. PostBody is done.

/// Aaand got all the assets moved, posts moved, images moved, urls changed, I think I know how I'm going to get this working, Ryan is coming over in a minute to help identify some tools I'm going to try and sell, and we're going to call it a day!

Oh, the paperwork. Okay, well, I have to do that tomorrow morning before I do anything else, for realz. Goodnight, and best wishes y'all! ~g
