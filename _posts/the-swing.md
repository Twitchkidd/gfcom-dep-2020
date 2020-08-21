---
title: The Swing
date: '2020-08-20T10:15:09.911Z'
description: 'In which we get into it!'
coverImage: 'dawaCourt.jpg'
---

Good morning! Dawa and I got to Harkness today! Got another half hour of biking, too, because we were a little too early, they open at eight, but now it's go time! I'm currently on the patio hiding from Dawa. He's got food, fresh water, air conditioning, and we stopped at the dog park on the way back and he got to say hello to a few of his friends. I might have to grab a chair, though, I thought I was going to be able to do the standing thing, but I don't think my back can take it.

Next step is to take the todos for the site and bring them into a kanban so I can have this all in front of me. I got some mental clarity overnight on the problem I had at the end of yesterday, so that'll probably be the first issue I tackle, and really it is just making an issue out of it, because it's going to wait, if it was going to be simple that'd be one thing, but it's going to take a little more involvement.

Oh, let me just post yesterday's ... boyo, am I not going to miss the deployment process I've got set up right now. I copy the blog content to the parent directory, switch to the oldSchool branch , rm the blog content there, move the new blog content in, clear the cache, clear public, run the build, drag over the two files and at least two folders into Cyberduck, commit changes, and back to branch next. Bleh.

OH VERY EXCITING! First cover image for a post! Okay, cooking time, get a walk in, back to it! If I could be done with the Gatsby site by tonight that would be amazing!

TODO: Switch this content over to the flat file!

// WHOA, VOICEOVER!

Also, got another run with Dawa in, another run barefoot, and I caught a flat on the way to the store afterwards, as I was going get all the self locomotion done in one fell sweep, and did, just took a smidge longer. My back is killing me a little, but I think I've given myself a few test runs of higher mileage/effort, and (knocking on wood) my Achilles hasn't shut me down yet, and I'm feeling more confident about maybe planning a new regimen of like weekdays we can get up earlier and go to the trail behind the dog park in Waterford, and a midday run, and then weekends whatever, because a second major session, maybe just like Monday, Wednesday, Friday at first, in the day, though, and I feel way more focused for longer in the evening.

Ahem. Website. Right.

So the images on index, on the example site they fit the screen 100% below small (640px), then the images stay at 640 and get margin horizontal, then above medium (768px) are 332px, and they actually kinda have an awkward amount of padding in the middle, because the images (two columns now) have margin horizontal and they stack in the middle. Then above large (1024px) the images bump up to 428px with, this has got to be more than accidental, that's a _lot_ of whitespace ... not on the outsides though, that's like ... I dunno, I want it puffier. Not that their box shadows are lacking, those are dope, nice work. Oh, extra large, nice, 1280px the images jump to 556px, maintaining two rows.

Honestly at the moment, these sort of roll one into the next, so how about I make it one column, but use that same strategy, lazy-load the images, deal with pagination in like a week when I have enough posts with cover images that they can be scrolled through, and for the moment just start to archive posts by putting them into just a simple flat list. Sounds like a plan.

Okay, that's it for now, big day tomorrow! Best wishes,
~g
