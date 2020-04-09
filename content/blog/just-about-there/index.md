---
title: Just About There ...
date: "2020-04-09T08:28:44.135Z"
description: "Hang in!"
---

Good morning! Got my second cup of coffee ready here ... it's going to be a big day! One way or another!

Hoping to finish off this Logoed project today, which I've been saying for almost a week, lol, but fo' rizzle. Hoping to hear from the folks who might employ me today! Crazy! Either way, game time! Also, it's time for another major clean of the apartment. I mean, it's not _really_ that bad, I did a major clean ... what, a week and a half ago? I haven't cleaned the bathroom after Dawa's haircut though, so there's dog hair everywhere, the dishes need doing, the laundry needs doing ... For the moment, coding is going to happen!

The hard thing is going to be the x-y problem. The easy thing is going to be styling the pages afterwards ... I hope, lol. I mean, I also hope the x-y problem is easy ... ow, I hope my back doesn't hurt like this all day, I've only been sitting five minutes 😐 Oh, and did the image disappear? Oh, no, that was because I switched top and left.

## X and Y.

Okay, so we're running `setXY(e, gestureState) => { setX(x + gestureState.dx / pixelRatio); setY(y + gestureState.dy / pixelRatio); }` and logging x and y with a useEffect hook, and the nice thing is that at least the logo is like, stopping when drag is released, because before what it would do would be to like, keep going for a bit after, like you'd let it go and it'd think, nah, I'd rather be another forty pixels or so in the direction you just moved me in, and jump there. So there's that. And setting the initial state of x and y is working, at least for this screen, but the values that are getting logged are ... not correct ... I mean, it's working, but I don't know why. When you take the snapshot, though, the image is placed where the numbers say it should go ... which ... is nice ... but the numbers are like way off ... yea, so total center of the screen is registering ~70 by ~680 ... The width and height of the screen are 414 by 896 ... 212, 448 ... then the image itself is one third the width of the screen ... so 138 by 138 ... but top and left could mean that number should be offset by 69 ... ... nice. (Shoot me, lol.)

Alright, yes, center is 212 - 69 by 448 - 69. So x is easy. Y ... how do we get ... I mean, two thirds, but whyyy?!?! And then, only sort of! EFF! We've got to be done here, though, we're going to push pixels, and push this project out the damn door, lol. Oh, it's started jumping again, too, and the infobox animation is pretty janky again too ... I wonder if debug being off will help ... Oh my god, it's just going wherever it wants ... OKAY IF I HOLD IT IN JUST EXACTLY THE MIDDLE, LOL! What a shit-show ... so it's got to be some coefficient of the total dx/dy ... yes, okay, so ... the original x and y values minus the current ones, times pixelRatio, minus 69? Oh, it disappeared, oh no, lol ... nooo, what magic did I do ... OKAY! CHRIST! subtract y-initial by y, multiply by pixelRatio, subtract THAT from y ... WHY?! I DON'T KNOW, GO ASK DAN ABRAMOV! lol. Fixed it though. Commit ... wait, let me reinstall the app, run it in non-debug mode, see if it behaves the same, lol. YAAAS!!!

## Everything Else

And the animation was smooth! Woot! And while it's totally worth feeling jittery to solve the x-y problem, I need to go for a walk now, lol! Dawa doesn't want to walk, it's a little chilly and raining, and I kind of want to go for a run, but I don't want to mess my back or ankle up right now, so just some juggling and time on my feet! Allons!

// Back, and back at it, and Dawa is giving me a bit of a break because it's raining ... fonts is going well ... viewshot is sometimes not getting the logo, which is a little annoying, so I tried putting it on the outside of the view, but it didn't like that, but maybe I just need to delete and reinstall the app? Restart the packager? Sacrafice a lemming? _I'll do it, too._

> When Life gives you lemons, don't make lemonade. Make Life take the lemons back! Get mad! I don't want your damn lemons, what the hell am I supposed to do with these?! Demand to see Life's manager! Make Life rue the day it thought it could give Cave Johnson lemons! Do you know who I am? I'm the man who's going to burn your house down! With the lemons! I'm going to get my engineers to invent a combustable lemon that burns your house down! -- J. K. Simmons

Yeap, just needed to reinstall the app, lol. Isn't this a joy? At least it's not Objective-C though. // Oh this is the stupidest thing, why isn't the text showing up in the modal? It says it's there in the debugger ... reinstalling ... Also I just wrote the grossest set of ternaries because I've had three cups of coffee and a kombucha today and I cannot be bothered, lol. I just want this finished!! Ahhh!! WHY ISN'T THE FUCKING LOGO SHOWING UP?!?!? OR THE FUCKING MODAL TEXT?!?!? Now the logo shows up in the debugger, but only in the caption copy screen, and then still no text.

## YAY!

Yay, I did it! I'm uploading the video I recorded demoing it, and I'm going to send it to Dave, and I'm going to be done with it! It's not as polished as I wanted, of course, and it did the bug thing where it didn't record the logo on the second run, but it did on the first run! GOOD ENOUGH!

YES!
