---
title: Big Bad Wolf Here ...
date: "2020-04-08T09:23:09.231Z"
description: "In which Gareth drugs his dog and does ugly hacks to cobble a project together!"
---

Sooo, I should probably explain that first part, lol, I'm not giving my dog heroin, he gets an anti-anxiety medication when I need to give him a haircut, and today is about finishing things. I need to be the big bad wolf here and finish off his haircut, and finish off this Logoed project, at least as much as it's going to get finished off, and I feel bad about not being able to give it all the polish it deserves, but it's got to be off my plate before tonight, and tomorrow I need to wake up unburdened. Tomorrow I'm (likely) going to get a call or an email back with a yes or a no as far as moving on with this job, which is very exciting, but I need to be ready to hit the gas, either way. SO! I'm going to make a todo list and _hop to it!_

Let's see, trivial stuff out of the way, I randomly got a life insurance check, when they said they weren't going to send one, but maybe the claim and the returned premiums are different? I don't know, rent is due tomorrow, and I know they're going to work with me on it, because unless the federal tax return comes in I'm not going to make it, but like everyone is out of a job, damn near, because of this whole pandemic thing. Oof, and there was another bill in two days, but I don't remember what. There was something on the 10th and something on the 20th ... eugh! Nnnope, no federal tax return yet. Weird, usually the state one comes later, but I got it a week ago. This sucks, I barely have food in the house. AHHH, lol!

Umm, what other small things, well, just that since I gave Dawa half of the tab of the medicine at 9, somewhere between 11 and 1 will be the window of opportunity there, and I should set the pomodoro timer going so that I can use my time well in here ... eh, actually, an hour and a half? That's like ... this should be enough time to just bust it out if I'm working intelligently ... so the aspect ratio thing, I'm not going to worry about that. The pendingDrag and logo size, that's got to happen. Restructuring the 'is this you' modal slightly, and altering the profile creation text, that's going to happen. I really want to get the fonts in there, I don't think that should take long. Restructuring the business selection screen, that shouldn't take too long, and then for presentational purposes I'll put together the table tent type thing for Leilu. Okay, the animation could be worse, I might play with the timing a bit, but that's pretty okay. Have to get the conditional text in there, and decide what to do about either a timed drop of the modal or just a button plus tap-outside or what. Oop, and I need to put the whole moving on thing back together, that's just a minute, and then getting the caption to look right, and the button bigger, but that'll be the same button as the qr code button, and then some sort of feedback, what are we doing there ... we'll cross that bridge when we get to it. And then just the next screen needs a little restructuring and there to be only one button at first, and then when you get back and say you did it, we'll need the loading screen to pop for a second and to create the thank you page and drawer stuff. Oh boy. Okay maybe more than an hour and a half. Maybe not, let's see. Oh, and the loading screen at the front of the app, why isn't it displaying anything, that needs to have a conditional message, too.

Let's take that from the top, why isn't the loading screen displaying properly, lol. // Okay, it _is,_ but it's showing please log in with Auth0 to use the app ... what is the presentation going to look like? Let's make sure we blow away the async storage thing, and delete the user, and what does that look like ... oh thank you helpful error messages! There's a .remove, who'd'a thunk. Mmm, so, .removeItem actually, and shoutout to [@TatianaMac](https://twitter.com/TatianaTMac/status/1247605419230388224) suggesting defaulting to searching github rather than google, definitely going to do that more often.

Oh, jeez, my computer is like, heating up, VS Code is stopping working every once and a while ... lord have mercy ...

Alrighty, two seconds to read the loading screen seems like enough time, maybe I bump it to two and a half, go crazy with it. // Alrighty, profile creation, is this you modal ... // Okay, put myself together, have another coffee going, what's left on the list?

- pendingDrag and logo size
- fonts
- businessSelection screen
- Leilu table tent
- play with animation
- conditional text
- drop button, use tap-outside for the presentation
- fix the viewshot flow
- Instagram post text (plus image?)
- ShareIt page (plus image?) plus flow
- Thank you page

Dog time though, go go go! I think it's allergies time, too! //

Oh, **no!** I just got the news that Bernie isn't running anymore. We're _fucked!_

The good news is that I got Dawa's haircut like 95% done, and that's despite me finding the pill he somehow tricked me into thinking he swallowed on the floor, but honestly, I'm _rocked._ There was this thread of hope that maybe the government could be nudged back in the right direction, but America is a rolling stone going down, as far as I can tell, now.

The appropriate response would be to lean into it, work harder than ever, get personally involved in local politics in some way, journalism or organizing or running for something, I don't know, but honestly the temptation to go buy way too much beer and anaesthatize myself is definitely there. Just when I was doing so well with that, too, lol. No, I'm not going to do that. I mean, not yet, at least. I'm going to get some snacks (that were supposed to be for later, but I need a mood boost _now,_) make some tea, and code. Then I'm going to get a little mad, because in my head I was thinking, the code doesn't care that this is going to hurt a lot of people, but I remembered, what I do with code could make _all_ the difference, and that being a force multiplier is what it's all _about,_ and what am I doing with my time and my talents?

Okay, deep breath, sit up, hit build in Xcode, and make some tea ... which is about how long building this thing in Xcode takes my computer, lol ... Ahh, everything is running slow, por que?

// Okay, fixing screens, rockin on, time to get the Logoing screen fixed. First, the shutter and logo shouldn't be visible until the modal drops ... no, that's fine, speed up the entrance though ... oh yea! Nice. Now the Leilu logo is invisible as is, time to fix the scale and maybe add a border or background or something.

// Mmm, been at it a while and my brain is starting to numb out ... I think I got the ternaries in the right place, but setting up the state management for them and whether a snapshot being taken should also saveSnapShot and navigate out is something for when I come back to the computer. Looking good though! Just these last few details of the Logoing screen, then the post-Logoing flow, and maybe putting fonts in, then make the presentation, then ... try not to think about the news too much, lol!

// Okay, had a bit of a bike ride, back, added an icon for profile creation, tapping a list item submits it, decided I'm only going to show drag and then snap, not snap and then drag.

// Dog walk number six, complete. My back started hurting as _soon_ as I sat down. Nice. The y value is being set to ridiculously high values now, and I have no idea why. My dog is like, _not_ trying to walk with me now, either, and he's totally throwing my back out yanking me all over the place. OW!!

// Maybe tomorrow :(

Best wishes,
~g
