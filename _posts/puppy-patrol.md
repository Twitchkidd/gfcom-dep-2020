---
title: Puppy Patrol
date: '2020-10-01T07:47:51.812Z'
description: 'In which nothing escapes the nose of Detective Dawa!'
coverImage: 'happyDawaAtHarkness.jpg'
---

Good morning! I would absolutely love to write a short story about Detective Dawa right now, I'm going to table that though, because I'm doing a time blocks thing and the vgs layout gets the next half hour, not Detective Dawa.

Oh yay, go Detective Gareth, my website was down and I finally know how to find out what files I missed with a cli tool rather than nuking it and reuploading or like, searching a file tree, lol. Jeez Louise. Next time I'll run this as a check and hopefully not leave my website down for long periods of time, lol. Let's like, make sure the website can do it's job now, one half hour in the calendar, go!

Why is Extensible Silver Tray not eagerly loading? I wonder if it's something about how the component is rendered. What else, let's see ... ohh, why are the titles a good ways down from the top of the card, why aren't the cards the height of the images, or the height of the tallest image, in fact, why do the cards not contain the images, why are the sections able to get infinitely big, feel like they should scroll horizontally and take two rows, and is text truncation a thing? I only need the first bit of a description, I remember truncating multi-line text to be somewhat of a pain in the ass though. The link to eBay or Craigslist should be differentiated with typography and also doesn't ebay have a logo, why not use that. Exclaimation point after Buy Now. Each heading should be a link to #itself, and should have a "X / Y Items Have Found A Home!" count ... right aligned or inline with the header? Can we do some more border radius action, and some major sploofiness? You know what I'm talking about, Future Me. Can I remove the 1/5 label from the carousel and have it auto-switch? Title on top, too! Bigger font, maybe centered! Share button that copies link! How's it look on mobile, I'm scared to even look. Oh also they are both called Extensible Silver Tray, why? And not-sold items first maybe? Ooo, if clicking the homed items popped a modal with the high-res images, that'd be dope. Yea, mobile is fine actually, it collapses to one card, same deal with maybe not doing that and limiting to two with horizontal scrolling ... just need to not hide the fact there's content to the side on smaller screens, maybe make it max 70% viewport width? Take the exclamation point off the footer, add "hire me" lol

Whoof, okay, one at a time then, fifteen minutes in, we'll see how far we get, but I'm not going to let myself go outside the time block with it ... though I do wonder about maybe 45 minute segments. Onwards.

Eager loading dilemma: not going to fix the images blocking the header and footer from rendering, I can maybe throw a spinner in there though? // Well, may have fixed it ... wonder if I can push this to prod to test real quick, lol. ... To the future!

Whoop, okay, it's building, but the puppy needs to go out. Pushing the next time block back, creating a time block for Dawa!

Website tested ... okay, I did fix the header and footer rendering instantly and then the rest of vgs taking so long to load, maybe I can remove eager from most of the carousel images though, because it's taking forever to switch over, and there's no feedback that the Nextjs link has been clicked!

// Okay, put myself together, changed location, time to work on the logic for it, 'cause it's broke.
