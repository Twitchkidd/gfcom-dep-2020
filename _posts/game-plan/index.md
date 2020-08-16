---
title: Game Plan
date: "2020-07-10T10:22:59.874Z"
description: "In which Gareth figures it out."
---

Good morning!

I've got to get this thing figured out! I've got to ship. We're shipping.

The problems right now are:

- the collaborator/organization stuff isn't working, might just comment it out,
- I'm having doubts as to whether having the option to only do public repos is a good design decision,
- the default branch not updating, the script worked, so it's the loop that need updating,
- I'm not getting error messages back, but testing and shoring it up beyond the most basic use case has to be v2,

Oh, my God, I'm an idiot! someProcess.stdout.read() is like a file read and once it's read, the cursor is at the end! I was going like if len(stdout.read()) > 0: and then trying to do something with stdout.read(), but I have to capture it and _then_ ... eugh, omg lol.

/// Much later. Very tired. Not getting released tonight, up early again tomorrow. Ahh. Best wishes, ~g.
