---
title: Happy Birthday Zoey!
date: "2020-05-06T11:50:12.236Z"
description: "In which Gareth's niece turns five!"
---

Good morning! And go Zoey, go! My sister sent me the cutest pictures, her little fam is amazing :) Okay, computers and stuff, go!

So unless the third time was going to be the charm there, my other hard drive isn't doing the time-machine swap thing, and I'm maybe wondering that the size of the drive was too much for it, or the disk that's in there, so I'm going to have to figure that out, but first I need to ... omg my puppy just flopped upside-down, looked at me for reassurance, and then closed his eyes again and continued snoozing ... umm ... okay, first I need to handle the rest of the node code (I KNOOOW!!) because people will never see my machine being totally backed up, but if I don't plow through this server-side stuff and get to the front-end, I'm like not going to get a job, and I'm a little nervous at the moment, lol.

Sooo, I've got a helpful list of what the wanted user actions to be, at least, and GitHub issues for the various parts!

Umm, okay, first wtf of the day, buds requests are being accepted and buds added, but the page is still rendering the buds requests ... I do not understand. Lol I'm Eve's bud so many times now ... okay at acceptBudRequest, which was totally working until I moved away from storing strings, lol, anyway, at acceptBudRequest at runnerController ... eugh, okay, `true`. I fought for that `true`, lol it was `user.buds.toString()[0].includes(otherRunnerIdString)`
