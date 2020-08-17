---
title: Re-Cover
date: "2020-04-17T08:04:13.112Z"
description: "In which Gareth covers a website, again."
---

Good morning! So first off, I want to get some of the styling changed so that this thing kinda _feels_ like mine, and then I'll want to work on it more. Not that I don't want to work on it, but when someone else wrote all the styles, you know, it's just like ... what is this? Next is colors, then icons, but first, the serif font looks _terrible_ next ot the sans-serif font! I love the sans-serif font, Hattori Hanzo, but Artifika next to it looks totally whack ... okay Museo is dope, I'm going to try it out, and if I have to buy the license later, so be it, I've got up to 500,000 page views per month for a website for now, with the 500 weight Museo Slab.

Yea! So good!

Okay, I replaced the sass variables I blew away yesterday, I'm not going to worry about swapping all of that over right now though. Icons ... Oh so good! SVG is still a mystery to me, but I can dig into them at least a little bit nowadays!

// AHHH Dawa got me out for a walk but wouldn't walk, and one of his pads is kinda raw! I think I need to give him a chill pill at some point, he's used to being so active, but both a) the load on him is just different since we started training, and b) I have to **do** this thing! Just quit my other job, definitely go-time, lol!

So the plan for the moment though is to get to parity, then plow through the course to get to users, and that's where the game changes. There's a dozen-plus videos after that, definitely email, definitely setting up the api, deployment, conquering user-land is a biggie though. Go go go!

Oh, thank goodness, I did it. All store stuff is now run stuff, no bugs, beautiful, leh-go!

Moving on with the course, learning about file uploads and chaining middleware ... and I finally used this blog as a reference, yay! I was getting an error that photo.resize wasn't a function, so I copied in the stepped solution and it worked, but I couldn't spot what had changed, so I went back and looked up how to diff between the current and previous commits, made a temp folder, and I'd forgotten to _await_ jump.read(req.file.buffer) ... silly me!

// Alrighty, got through aggregation! That was a doozy! Think I more-or-less got it though, good thing I've already done some work with chaining map-reduce-filter, so that's not really that foreign to me! It's been a few hours though and I'm starting to lose concentration, so it's cleaning party time! Woo! // And back to it :)

Multiple queries in a controller, dope, cool to see Promise.all in the wild. And on to user accounts! And soup!

Aaand we've got registering a user! More or less! Still getting some jankiness in error states, like the request body doesn't seem to repopulate the fields, and different errors are handled either by the form or by flashes, but the happy path works, failures are handled one way or another, beautiful!

Saw that one job made up and disappeared, applied for another, walked Dawa, cooked for Dawa, finished the dishes, broke one of the glass chambers for my French presses, started a list of things I'm going to buy when I have a job in tech, and gooood night!

Best wishes!
~g

Oh, P.S., Dawa had an awesome little play-sesh with Pepper and Lola, and I think it's probably just his pad worn down than any real damage, crossing my fingers and thank God! I saw him limp a little today and my heart dropped, and I'd thought I'd really hurt him, but I think he's good! Eep.

P.P.S. Two applications, yay, g.
