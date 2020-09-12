---
title: Beanie Weather
date: '2020-09-12T06:27:55.014Z'
description: "In which the season changes, in Gareth's head! ... on Gareth's head?"
coverImage: 'dawaHarknessFall.jpg'
---

Good morning! Up early, and boyoo has 'early' changed! I dig it! Beanies ftw.

I've got to get focused here, and so each item in the spreadsheet needs to be either listed, relisted, updated, and then the images on my website ... I just got 3.9mb down to 194kb, and for whatever reason ... oh, hey, so 3.9mb files weren't being _served_ at least, the optimizer was working, but it was trying to optimize a 3.9mb file, sooo ... and yea, so 101mb of media transferred and almost a two minute load time on wifi ... whoops!

Oh, right, that's what I was seeing yesterday, because I was running `yart` rather than using a production build, and next-optimized-images doesn't optimize in dev. (The command is actually `yarn dev`, but since create-react-app and gatsby were `yarn start` I've been abbreviating the run a development build command to `yart` because it sounds funny. 😆) I saw the full size files being transferred yesterday and was like, "Noooo what have I doooone," and I still need to fix it, not that bad though.

Spreadsheet. Images. Postings. Website. Go.

/// Wow, okay, so my bike isn't working, but I ran Dawa to Harkness in the stroller to run him. I'm totally rocked. I'm going to handle the images now because that involves a bunch of the same thing. I wish I wrote down what I learned yesterday with the `xargs` command. Yay browser history though. Also yay coffee! Bring me to life, magic bean juice!

Right, okay future me, it's `find . -name '*.png' | xargs -I % sh -c 'open %;'` and you can run `-maxdepth 1` or any number to limit find's recursiveness.

// Whew, that was a lot of pointing and clicking, lol. Images hopefully fixed? Let's see what the production build looks like!

// Whoops, forgot /public/postCovers!
