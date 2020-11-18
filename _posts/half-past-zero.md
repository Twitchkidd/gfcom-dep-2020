---
title: Half Past Zero
date: '2020-11-18T07:44:04.443Z'
description: 'In which Hello World!'
coverImage: ''
---

Good morning! Been a while since I posted, today's the day though! Yesterday I knocked out every bit of procrastiwork, and today is a work day! Feels work-day-ish! Let's go!

First thing is to do a minor tweak of VGS to show items in reverse chronological order, and then I'm going to finish the photographs, which have been looming, and then post and update the site, get another set of photos scanned, and write and send out the email to share.

What else is happening? The world is ... less on fire than I was thinking it was going to be a few weeks ago? Biden won, which is good, there's **so** much work to do, though. Please let's not let our country totally collapse, please can we take care of people, and please can we heal the sickness we have, of hate and pain passed on and on.

Eugh, enough about that, what else ... I got to Old Colchester Road the other day, so I at least know where the turn is and what the road is like ... hoping to run my first 50 miles at some point! I'm going to need more training, though. Honestly I've grown a little pudge back that I'd been working on losing, and I just need to be getting more training volume in. It's tough with the dog though, there's no rest. Like, if I'd been tapering for two weeks before the run a few days ago, I probably could have made it. It's going to be like, late winter or early spring before I should attempt it though. When I've gotten all my other work done today, then I'll let myself look at my Strava data and do some planning.

Dawa is well, though he needs grooming and probably today is a ::types in a whisper:: _bike ride_ day, I need to look at his little peets and see if he could maybe run on pavement today though. We got a lot of brushing in the past few days, just ... _so much hair._

Ah, let's see, running, coding, coffee! I'm drinking some Columbian from Muddy Waters today. They've got a new person behind the counter and Rachel had to show them how to sell whole bean ... ahh, the memories! I've got to write about my Starbucks experience sometime, that was wilder than ... yea, I dunno, there are few times in my life that were more wild. The thing that comes to mind was the National Youth Leadership Conference on Technology. Walking into a building and finding out that there are other people like you, thousands of them, and here they are surrounding you and asking if you want to play a round of Tron, pretty epic. Starbucks was also another world, though. I hope I can have a café someday ... I've been dreaming of that for a long time ... what was (is?) that place down in Dana Point that's a bike shop and café?

Anyway, good, things to hope for! Dreams to work towards! I've been real low on the hope lately, let's get some more dreams out there as an exercise!

Elsbeth said she believed in me that if I worked hard, I could probably buy a house in five years (when I asked. Thank you!) I want to get a job in tech that I can do remotely, get rid of most of my stuff, put it in storage, and travel with Dawa and then settle down here, and be able to travel to like Colorado and other places up in the mountains to run and train for part of the year ... maybe start a family with ... well, I mean, family started, Dawa is family. Aww, look at him. Adorable. I hope we can really be ... you know what, today _should_ be a ::types in a whisper:: _bike ride_ day, we should get to the trail.

Right then, dreaming big, running coding coffee dog, now push some pixels!

Oh I forgot to mention I finished the first part of the MOOC! I'm super excited to keep going to the next part! I bet it's way harder, I kinda breezed through it. I've been coding for like six years though lol, sooo ... Ooh, and I was able to help someone else finish, too! There's a bug in the last exercise where you have to have a particular classname present. Mmm, and I've been trying to connect with Patrick out in LA, that's been a little rough though with the time difference, and he's busy too. I'm up at 5 every day, which is 2am for him, and he's only available after 3pm his time during the week, so 6pm my time, I'm usually winding down by then though, and just sitting in this chair is like ... I'm doing okay at the moment, I should get up and stretch in a few minutes though.

Okay, reverse chronological order time, let's gooo!

It's been so long since I've looked at the code for my site I'm like ... where is everything, what's happening, what language is this? 🤣

Oh no, it's the same as with `master-blaster`, I didn't do any abstraction and ended up with a massive file ... I only need to make one small change though ... why do I say though so much? Annoying.

// Good lord, we made it. Bike ride accomplished. It's very cold out, but we did it!

Work time, go!

Oh, it _has_ been a while since I've written JavaScript. The first thing I hit was a type error, too, crazy.

`// bits[2] = "20"`
`const year = bits[2] + 2000;`
`console.log(year) // 202000` lol

Good old parseInt() is what we were looking for, had to Google it though, lol. I did remember at least that the second argument should be `10` if we want base 10 though! Yay MultiBounce, which uses that function a billion times!

// Yea! I did it! I remember how to JavaScript, yaaay! Tempting to switch context back to Java **immediately** lol. Nah, actually, the type thing is cool, but the Java code I've been writing has been really simple and starts from a blank slate each exercise, it's just that my JavaScript code is a mess. // Oh, that's a little better, moving VGSCard to /components helped.
