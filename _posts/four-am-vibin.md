---
title: Four AM Vibin
date: "2020-08-13T04:30:02.560Z"
description: "In which Gareth is at em!"
---

Good morning! Clocking in at 4:30 today! I ... oh no ... does ... he does. Goddamnit, back in a bit.

SWEET, FIVE AM VIBIN', LET'S DO THIS. CSS grid time.

Sweet, grid is awesome. Maybe overkill for what I'm doing, I want to train my thinking in line with the latest, though.

Hmm. Why is mobile null? Oh, wtf ... this is one of those times where it doesn't work and I don't know why, and then I change something and it works, and I don't know why. Literally added a console.log() in there and what do you know? isMobile.current gets assigned in the useEffect. No console.log()? No assignment. Is JavaScript exiting the function because of an error? This has something to do with useRef maybe, because I'm just calling it rather than passing null, and now it works on the first render, but not if there's headerState in localstorage?

Ohhhkay, just about there with this, and what we learned is that if you have a lot of logic, figure it out before coding, lol. I think maybe I thought that there wasn't as many if statements we'd need for this. A hundred lines to start out with and not really correct to ... 135 lines, 107 aren't comments. Woof, that took way too long. Mad at myself just a little, lol. Maybe I'm still not caught up on sleep though, is what I'm thinking. Time to put myself together and get Dawa out for a run!

Ahhh, jk, I remembered to test it and it's not working :(

// Alright-ily-doo, took Dawa to Harkness, got a run in, feeling a lot of tightness and a little pain at the ankle, ack, but we lived, had a little socialization at the park, I took another shower and got some beans and rice in, coffee, and I'm going to give myself thirty minutes to fix this and do any other coding, then switch to administrative tasks. Go!

It's only happening in desktop mode, it's perfectly fine in mobile mode ... yaaay fixed it! I wrote just isMobileRef vs. isMobileRef.current just once and phwoof, it fell over.

Ahh. 10:30. I want to keep going, but I've got to get these things printed, filled out, and in the mail. Priorities time go! Stoked to come back though, the next thing to do is right there on the sketch pad next to me ... must tear self away, lol.
