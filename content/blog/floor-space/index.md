---
title: Floor Space
date: "2020-07-22T15:52:19.116Z"
description: "In which the table moves outside."
---

Good afternoon! What a few days! I can't recall at the moment whether I finished up two days ago's post, or if I even made one. Pretty sure I didn't finish up yesterday's post. Sometimes an official sign off isn't possible. C'est la vie. (... la vie!) :)

So, today my morning's moment of creative genius went to the processLogger function, then I fleshed that out a little and am ready to test the processes, also I have the Python extension for VS Code open on the other machine, and there's this wild thing called Jupyter that they suggest, so I'm checking that out, it's like if you could just slap some Python into your Google Doc, but with extra crazy sprinkles on top for visualization, and the whole application is both super nice for features and easy to share stuff with, and also not just Python but like a whole bunch-ton of languages.

Ooo! Also, I used an access token for the Strava API from Python and it worked! V. excite! I've been naming my runs specifically with this moment in mind for the past several years! Literally!

If the run is named like "4mm Merrells", so just a specification of shoes/barefoot, I was alone, and 4mm Merrells vs 2mm Merrells just means Trail Gloves vs Vapor Gloves, and barefoot is always "Barefoot" and then so if Dawa is with me, it'll always be named like "2mm Merrells with Dawa" or "4mm Merrells pushing Dawa" if I'm running with or pushing Dawa in the stroller, respectively. This could be good for my own training, sure, but if I can also include data for whether Dawa is running on trails or pavement and score how his little paws are doing over time ... just like, being able to make a plan for him would be great, rather than guessing and playing it by ear, there's got to be a way to visualize this and make things easier ... also I get to pick a charting/visualization library to try! And learn the Strava API!

Okay, I need to switch to sitting on the sofa so I can keep doing this, I'm at like two hours of sit and focus time today, the next task is fortunately just a lot of work rather than needing a whole lot of creative energy. I'm going to make this code so much more readable, with way less lines of code. Okay, so it's 1161 lines right now, let's see what we can bring it down to.

Oh, before I go, so I can wrap up quickly later, the title/description thing, I went through every paper I have, which is many papers, though now fewer, and sorted them into five categories and then garbagio. Personal and work still need sorting through, they're shuffled a bit, but official, archival, and questionable content, stuff flagged as 'do I need to keep this?', all in seperate physical spaces. Having at least some notion of control over my life beyond the confines of these walls, and knowing that if I need to look for something important that I could either find it or not find it and know within a reasonable amount of time with a reasonable amount of certainty is no small comfort.

Okay, sofa! I revamped the sofa area so there weren't boxes and now there's a servicable _and charming_ nook and hopefully Dawa is okay with just chilling there for a bit until I cook his dinner, because there's ... like two dozen cases of subprocess.Popen that need processLogger applied ... which is really on me to have been dense enough to repeat that many times, but I was _so_ close to being able to say, "Here! This works! More or less! For the brave, go for it!" ... sooo, now I need a post-it note with DRY taped to the monitor, but also to fix this mess. With the function's definition and applying it once we're at 1179 lines, from 1161, but it could maybe go down to 1080 lines?

Hmm, well I implemented it again, and fixed the function, but I had to comment about a bug and what to do about it after a few more implementations, so we're at 1188 lines. I hope this doesn't turn into spaghetti. Pressing on ...
