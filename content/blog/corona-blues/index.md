---
title: Corona Blues
date: '2020-08-16T09:17:44.794Z'
description: 'In which Gareth misses cafe culture just a bit.'
---

Good morning! I'm working out on the patio at the moment, only briefly as it's started to rain, I'm really missing being able to bike in to Starbucks in like ten minutes and see a friendly face and be able to work someplace where my dog isn't. I love him dearly, but I'm feeling totally overwhelmed. I did end up getting more sleep last night than I've been getting, still very tired though. Arrg.

Okay, good news time! Finished all the episodes of The CSS Podcast! Feeling ready to take the UI on! Next up is still posts logic, though, I didn't end up finishing that last night, so let's get that going.

The example blog starter from Next has parts in ... lib/api, lib/markdownToHtml, public/assets/blog, \_posts/, components/\*, pages/posts/[slug], pages/index ... and that seems to sum it up.

// Okay, 10am check-in ... right now I'm bringing all the components over, the styling is handled by Tailwind, though, so the process is to copy it in, set it up with styled-components, and then see what the Tailwind classnames mean and turn them back into CSS. Woof. Oh well.

Wow, so much typing. This is good, though, a lot of the stuff I've been doing recently has been really intellectually challenging, I've had to find solutions to things, build things out, yada yada, this is, I mean I'm not just copying something over from a tutorial or something like that, I have to be cognizant of what the Tailwind class means in CSS and name components and deal with imports/exports, and if I didn't have the HTML/CSS knowledge I do, converting this over would be kinda difficult, this feels great though, little bit of a break. Easy wins are not the worst thing in the world, lol.

Five components left! Oh, wait, jk, nine more. Still!

Oh, see, here's one of the reasons I wouldn't use Tailwind, besides what it makes the markup look like: the property `hidden` means `display: none;`, not `visibility: hidden;` and I was really close to missing that, but there was some margin on an element that would be rendered as one piece of markup or another based on a breakpoint, and I thought that was weird, so I looked up whether the order mattered in classnames with Tailwind, which I should have known, there's nothing special going on here (it doesn't matter,) but then I was like, "Huh, doesn't `visibility: hidden;` maintain the geometric space in the DOM? It does. `hidden` just doesn't mean the common CSS thingy with 'hidden' in it though :\

// Phew, okay, so there's just Layout and PostBody to go, and those are just a little trickier, so I'm going to leave those for tomorrow morning and do other things the rest of the day. That was a lot of typing! My forearms are legit strained, lol.

To the future, and best wishes! ~g
