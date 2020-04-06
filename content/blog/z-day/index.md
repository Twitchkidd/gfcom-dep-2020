---
title: Z-Day
date: "2020-04-01T13:19:05.146Z"
description: "Whoa!"
---

Ahh so much! First and **WOW** I got contacted by a startup that's hiring!!! They're a React/React Native/Node shop, and want to build a diverse, inclusive team!!! I need to hope for the best and prepare for the worst, of course, but OMG!!! My fingers are crossed!

Okay, second, last night I was like, sure computer, you want to upgrade the operating system, go for it, and today I woke up to bash being deprecated, which umm ... whole new world here, lol. I installed [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) and pasted in my .bash_profile, and it doesn't seem too... different, I haven't tried to run a React Native project yet. Eep. So many plugins though! Very temped to install the Chuck Norris and Cat-speak ones.

Here goes ... hope it works! If I can get what I want to get done on the Logoed project before talking to this person, that would be awesooome ... this _is_ React Native we're talking about though, so I've got time to make and eat a salad and make another coffee before it loads, lol.

Sahweet! Course I was greeted with an error, and I'm not sure what I did to break it, but game on!

I'm going to post this up, I'm so stoked, and there's a shortage of good news these days, heh ... WOOT though!!!

// Lol, so I fixed the bug _right_ before the tweaker guy went by yelling. Fml, lol.

Awesome, though, Got to the Logoing screen. Which I still have to build, but I've built it before, this won't be too difficult, he says, lol. Come to Connecticut, they said. It's a little quieter, they said.

Uh-oh, no ruby ... save me homebrew you're my only hope? Yay! Also, thanks [everyone in the GitHub issues!](https://github.com/CocoaPods/CocoaPods/issues/8955) `brew install cocoapods ruby && brew link --overwrite cocoapods` did it for me!

Hmm, I broke the ProfileCreation screen ... when did I do that? Whooaah, it just lagged massively ... weird, lol. Whaaat and an affirmative response didn't load the BusinessSelection screen! Wait, I should do that whole thing differently anyway, hold on ... lol, though reloading the JavaScript bundle fixed all the glitches ... come on :)

Hmm, so this is interesting ... currently, the root navigator relies on Context to render either the ProfileCreation stack, which itself only has one screen, navigates to the Modal within the root navigator for a confirmation screen, and then either sets the Context so that the Logoing stack is displayed, or doesn't if the response from the modal isn't affirmative, and then I was like, well this should clearly just navigate to the BusinessSelection screen on affirmative, but it's not in the same stack ... which, I should try it, might actually just work based on react-native navigate actions tending to fall back to the level above if it doesn't find a screen with that name, but that's a silly way of doing it if being explicit about it is just as easy.

ANOTHER company reached out! WHOA!!! SOOO stressful answering the salary question though! I asked Reactiflux about it, maybe they have some words of reassurance :)

> Anyone ever feel extremely uncomfortable answering the, "What do you expect your salary to be?" question? I've never really had an actually salaried job in tech, just a freelance gig or two, and I think I'm, like, okay, but compared to the minimum wage that I'm used to working retail (doing my best! :slight_smile: ) the amount that I feel I should be responding to this question with just feels absolutely ludicrous ... Like ... I basically just wrote a number down that I pulled out of my ... pulled out of the back of my mind remembering the State of JavaScript survey and divided by 12, and even then I lowered it twice before actually sending the message ... like ... a pat on the back and a crust of bread every once and a while would probably seem like too much, and I know, I know, rent, but holy moley ... is this really the world we're living in? Like, I've been working at this when I can for like six years now, but it doesn't feel real, you know? -- Twitchkidd

Ooof, where was I? Ahh, there's only so much daylight here, dog-walking time again!

// Okay, this has turned into a tomorrow morning question. There's only so much being out in the cold I can take. It's April, definitely ready for some Spring-like temperatures. The orchid is budding, though! This in parting:

![Orchid blooming](./orchid-blooming.jpg)

And best wishes,
~g
