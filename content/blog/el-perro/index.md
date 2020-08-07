---
title: El Perro
date: "2020-08-07T09:06:54.749Z"
description: "In which Gareth does the clickity-clack!"
---

Good morning! I've been up since 5:30 and moving pretty optimally, Dawa and I got out for a first walk, then for a bike ride and trail run, and now we're at the dog park and I'm about to finally be able to get some work in, I hope, lol. It's just such an effort to be back to the house at 8 having biked miles across town towing him, and then dragging him on a trail run, which to be fair really is only until we get into the groove, then he does great, and his little paws are showing good texture, so the plan is working, but then I have to tow him back, get put together, and then he's like in my face for more attention, and about at the end of my rope here, but there's coffee at least, and hopefully I can escape into some headphones soon here.

Okay, morning meeting with myself time, what's on the docket ... okay, got my files here, bio is partly deconstructed, layout is set up once I'm ready for CSS, working on index, up to Sidebar on mobile.

Okay, here's the last commit before main got rewritten `9bf4ca9b9470934b5063c70893bed3968d4fd0bb` ...

Oh, lord, that's what's going on with the tabs. I forgot how crazy that was to set up. Okay, umm ... DepNav, right, I renamed it. This thing needs wiring up a certain way, though. Back inside we get, working out here is too difficult 🤣

Tabs has to encapsulate Tabs and Panels, and is where the state for the index of the panel lives. Tabs are buttons that get useTabState() for an onClick, and need to be wrapped with React.forwardRef. Something funky is going on with useRef there, too, I'm not really sure what. Oh, nevermind, I do, that focuses on the coding tab, I thought `codingRef` was related to something I was testing at some point.

// Alrighty, had a snack I was getting hangry. I need to do some cooking here, there's nothing really prepared and quick, so I made just the crudest cheese sandwich and got it down my gullet, lol. Closer to calorie-even today though. There's some soup for later, and rice and beans to make, and I need to figure something to do with red lentils ... anyway, back to React-land ...

I really don't like how the tabs are right now, component-wise, but I want to get the rest of this design more filled out here first.

Hooof, mobile done, at least Index. I guess now would be the right time to wire up Layout ... pheeew, done with the markup, for the moment. Doesn't exactly build yet, though, definitely made up some variables and functions there. Wonder how many errors in the build tool ... 13, NICE! 11! 10! Good enough for now, time to take Dawa out again!
