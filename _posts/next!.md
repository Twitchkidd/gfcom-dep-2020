---
title: Next!
date: '2020-08-14T06:47:47.858Z'
description: 'In which Gareth changes build tools!'
---

Good morning! Alrighty, so I wanted to get right to it today, lot to do. To the future!

// Phew, okay, so I finished the Next JS tutorial, super interesting! I'm pretty stoked to port this over. `gatsby-starter-blog` does a lot, but Next is great, from my very limited experience, lol, less convoluted by a lot. I bet things could get out of hand pretty quickly, mais c'est la vie.

Oh yea, why am I doing this? Check [this thread out!](https://twitter.com/tesseralis/status/1293649007739191296) I remember when Gatsby just came out, sorry to hear it turned into a "frat-boy company". Big oof notation, here, oof(n).

Okay, so we need a try-catch for the JSON parse call, and then I guess I should do some planning before just diving in to a major refactor :)

// I'd finished learning the basics of Next out in beautiful downtown New London, got a few groceries, got back, took Dawa for a stroller ride and a walk, went and fetched the stroller, Dawa was whining when I'd gotten back and gotten everything put away, so he's been fed now, and so I figure I have between five and thirty minutes to work. Definitely still in work mode, I've been listening to industry podcasts (and Revisionist History!) all day: Toolsday, ShopTalk Show, HTTP 203, Design Details ... let's see, Revisionist History was **dope** as always, Toolsday was about TypeScript, and the lesson there was 'maybe learn TypeScript, prepare for a lot of work, great for collaboration though', ShopTalk Show had a big segment about Tailwind CSS, and the lesson there was 'customize it if you use it, and there are maybe perf gains, but you have to like working in that way (not me, lol)', HTTP 203 was fascinating as always, deep dive into session history, iframes, the HTML spec, browser behavior, and how those last two built eachother', and Design Details dove into whether design systems stifle creativity and how to communicate cross-team North Stars.

Welp, looks like five minutes was closer, lol here was go! Maybe I'll pack the laptop, we're probably just going to go hang out at the dog park.

// Alrighty, headphones in to try and drown out the dogs, Dawa's just chillen, I've got to figure out how to do this ... .git/ is in gfcom ... gfcom -> depGfcom ... aaand we've got to go now. Dawa gets cranky when he gets hot. I get it. Samesies.

Alright, so the actual html/css is one thing to port over, that should actually be pretty straightforward, there's a bunch of other stuff that the Gatsby build system and plugin ecosystem provided that I'll have to reimplement, if it's important, though, so let's try and be organized about it.

Getting organized with nearby screaming children in the early afternoon while you're sleep-deprived is proving a challenge. I tried working out on the patio just to be away from my dog just a little bit, not happening though. Not too thrilled with myself right now, this was supposed to be done by mid-week. I'm going to call it, though, this is critical stuff, I need to know ... well first I need to know where ./public/page-data came from, and what the hell I did when I pushed the 'debug' button that VSCode put above the scripts part of package.json, then I moved over the new-post program, which like, could use a refactor, importantly though I need to make sure that how I'm building the frontmatter is going to cross over ... that's a place to pick up, let's see whether I can get more done after a nap.
