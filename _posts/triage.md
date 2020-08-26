---
title: Triage
date: '2020-08-26T07:43:29.224Z'
description: 'In which Gareth fixes it!'
coverImage: 'oklahoma1.jpg'
---

Good morning! Oh shit!

Went on an adventure on already dead legs yesterday, yolo threw my site over to Next.js, and passed out from exhaustion. Pfft, what the heck.

// Todo, insert the screenshots

Eugh, whyyy.

Okay, _go_ though ...

SocialsModal is not defined. Can do, boss. Slapping a library on it, easy solutions for the win right now. Fifty seven hundred stars on GitHub, surely we're good. \_\_next is the root element? Kay, oop, gotta switch computers, the one was on fire. The one thing about an East-facing patio, I've got this tiny nook of shade with my back to the storage where there's shade, but for the computer, nothing until later.

Okay, that was only like a dozen components I just hadn't made yet, thanks Past-Me, but that's handled, and now we have a new and interesting error based on how I slapped the tabs library on there. Worked well enough when everything was split into files. index.js is now 739 lines.

// Dawa has had another walk. No run today. Ouch. 9:30 is when this nook is totally in shade, and pleasant to work from.

![Patio desk at 9:30](/morningPatioDesk.jpg)

Oh, compiled successfully it says, I'll believe it when I see it on this last change ... yea, nope, Object(...)(...) is undefined, says it's in panel or in tabs, works on desktop, not on mobile, HRMMM!! // AHHH I forgot to wrap the mobile markup in the Tabs element, derp!

Oh boy, I broke posts ... that was one thing I was hoping to see, haha, whoops ... Okay, well, the smallest amount of relief, going to the url manually works, just the links are going to literally /posts/[slug]
