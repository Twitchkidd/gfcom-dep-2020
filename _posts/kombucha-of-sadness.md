---
title: Kombucha Of Sadness
date: '2020-08-28T03:50:50.608Z'
description: "In which Gareth gets a scoby, and kinda wishes he hadn't, but there you have it."
coverImage: 'coffeeAmbiance.jpg'
---

Good morning! It's not even four yet, which is the only way I'm going to get away with coding today, once the sun is up I'm going to make a tremendous mess, in the best way possible: virtual garage sale time! Until then, I'm going to try and make my website as fabulous as possible and put off being sad about my only queer friend at the dog park up and leaving last night!! I've got her kombucha making kit, and sent her off with a care package. Eugh, why.

Okay, code. Move the little blocks around with the special words, lol.

Okay actually while I'm complaining, I'm going to go off for a second and go all caps, lo siento DOES THE WHOLE GODDAMN INTERNET NEED TO BE IN LIGHT MODE WHY IS THIS THE STANDARD, PEOPLE, WHY?

Sigh. Breathe. Code. Make your site dark mode if you want, move.

Currently have this song Leaving Earth 2 by Medasin on repeat-1, sooo good.

860 lines in one JavaScript file, less good maybe. This is triage, not refactoring, though. I think I fixed some of my grid woes by remembering grid lines are one-indexed, which like, I feel like designers wouldn't have a problem with zero-indexed grid lines, they don't have a problem with zero-indexed hex codes, anyway, where are we at?

Other than beautiful downtown New London.

We're at least at "compiled successfully," which is nice. **This** is really pretty hideous though:

![Website, aesthetically unpleasing.](/8-28-20-001.png)

First off, the thing isn't fixed to the view height, the sidebar goes all the way down to the last piece of content. Oh, hooray, fixed! Okay, now, why is the desktop header1 all squished? And blue! Okay, width fixed, color fixed, image fixed, everything centered, why is it over there though? Hmm, header1 needs to be outside of sidebar, kay, kay ... Oh, place-items: center; was not a panacea, now the main overlay and main content divs are centered, where I was expecting content to flow ... Ooo, place-self! Next thing needs to be some padding on the right, maybe the images can stop taking over the world there ... love a good image, but ... oh, and some bottom margin for the footer in posts, that's really irritating on mobile. And like the whole mobile layout, those absolutely positioned items aren't going to just magically handle themselves.

// Standing desk mode time! I love coding early, but my back doesn't magically become able to let me sit for more than an hour, lol.
