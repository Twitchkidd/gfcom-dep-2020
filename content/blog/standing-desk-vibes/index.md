---
title: Standing Desk Vibes
date: "2020-04-07T06:41:12.203Z"
description: "In which Gareth acknowledges his back pain! 😁 (Ayy, this thing does emoji!)"
---

Good morning! Up early enough that the dog isn't asking to be taken out yet, good sign. Whoop, speak of the devil :) //

Okay, so, I'm going to prioritize my tasks and then start the pomodoro timer off, after looking at the code for the pomodoro timer for a moment, because the pair programming exercise, if I get there, (please let me get there!) is going to be in Node, so let's look at some Node code.

Node code, bro, whoa! // Oh no, it's almost unreadable, lol. Hold on ... Oh, that's nicer. DRY'ed it up a bit, removed a silly dependency, much more readable

Okay, so, Logoed tasks, one by one ... the splash screen, I'm going to spin up a test project for that, I still want to get it, but since it might be like a lot of trouble, other things for now. Let's get some wins. I don't know how I broke the viewshot code, so that's high priority, and then the infobox, and then everything else, go! Oh, you know what, the whole aspect ratio thing ... that's number three maybe.

Lol the viewshot code fixed itself. Wtf, lol. Sometimes you just have to wtf. Like this morning, when I woke up, and right then tweaker-man went by ranting about something-or-other.

// Eugh, some GI upset, and I feel like an _idiot_ right now, too. I know I slept Sunday night, but Saturday night and last night, not so much, and I am _feelin' it._

Oh, I didn't pass onPress through. I thought I broke everything, lol, but I just took a component out to try and make things more readable.

// Okay, so just spend like an hour wrestling with react-native-modal and the Animated API, and ... I don't know, I can stick with it, and just run the whole animation after the modal has loaded, because the whole 'tap outside' thing is no-hassle ... yea, maybe I'll do that, either that or just have a seperate modal overlay that's always rendered but opaque and tie that to the same animation, but then have to wire up some sort of closing thing ... still don't have an icon that it's supposed to disappear into ... this is surely like, not how to do it, ideally ... kinda want to reach for a library, but I'll just press on here and try and make good enough with what I've got right now. Dog walking time! 🐕

// Bueno! Let's see if I can't do this thing with react-native-modal ... okay so I need to set the initial position to way off screen, like all the way to the right and then all the way down plus another screen's length (height,) and then so when the modal is _going_ to animate, fade out the icon, then when the modal _has_ animated, zoom and fade the infobox in, then when the modal is _going_ to animate, zoom and fade the infobox out, and then when the modal _has_ animated, fade the icon in. Okay, go!

Lol I was going to make a coffee at one, but I just forgot and kept working. Pomodoro app doesn't do much if I don't pay attention, lol. Getting in that zone though!

AYY!! Got my first infinite loop error in React Native! Fabulous! It all sorta came together in my mind, and then ... it didn't work, lol. That's fine, though, I get to find out why and figure out another way to try it! Or at least find another way to try it!

Wow, okay, so actually I was loading the modal in the background when camera permission was set, and the button in the modal had onPress={functionThatAffectedState()} rather than onPress={() => functionThatAffectedState()} so it was running immediately and causing a rerender loop. Fascinating!

// Sweet, okay, requisitioned some supplies, changed marginBottom to marginTop and the animation makes way more sense now, though it's hardly perfect, walked the dog for the fifth time today, his food is warming up, and I'm _exhausted_ and am going to just pick off some low hanging fruit so that tomorrow I can tackle hopefully the last of the hard stuff tomorrow and that it'll feel closer to complete will drive me to finish up.

Best wishes,
~g
