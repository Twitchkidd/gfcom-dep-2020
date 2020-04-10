---
title: What'd We Learn?
date: "2020-04-10T11:16:44.135Z"
description: "In which Gareth breaks it down!"
---

Today I'm going to go back through what I've worked on for the past couple of weeks and pick out what I learned, what I can work on to improve, hopefully arrive at universal truth and beauty, all that. Or just not wanting that knowledge to immediately leak out through my ears. 🤣

But first! I couldn't get the new disk drive cable to attach to the bracket, so I tried just plugging it in and leaving it outside of the machine, and it's working! I think! It didn't recognize the boot USB at first, but I reset the NVRAM and PRAM and it booted right up and started installing MacOS High Sierra! Holy cow! Ordered a new cable plus bracket, pretty cheap, considering I get a whole backup machine, just in case.

// Okay, so, an update on my day, I meant to get to work like way sooner, but I worked out, worked the dog out, cooked and did meal prep, got supplies, walked the dog again, and went through a video of stuff I have to deal with that my father sent me, and now it's 4pm. Bit of an oof, but I took care of my body and at least some of what I had to do ... still haven't heard from the company I interviewed with and I'm kinda just wishing the hammer would drop, **but moving on!**

### 1: Working Yourself Super Hard and Sleeping Is Great

I seriously wish I could wake up with the answers to whatever it was I was working on the previous day spilling out of my head and jump up out of bed (ha) to write it down and be energized every single morning. Freaking amazing when it happens, doesn't happen all the time. Moving forwards, first of all I know it _can_ happen, so the next plan is going to include trying to get it to happen more consistently (by working myself super hard and trying to get ~~good sleep~~ sleep) while also recognizing that when it doesn't happen, having routines, process, and discipline is what gets you through. Say what you will about making coffee first thing in the morning, I believe Michael Pollan wrote about the dangers of this in one of his latest books [Caffeine: How coffee and tea created the modern world,](https://michaelpollan.com/books/caffeine-how-coffee-and-tea-created-the-modern-world/) but I get up and I know what my next steps are, generally.

Lol, on that first day when I woke up and started working on Logoed again, that night, "there are sounds coming from _everywhere_ right now, and I can't handle it ..." ... Yeap. Like two nights ago, almost totally lost it. Please let this all work out so I can escape every night being movie night upstairs, yelling tweaker man, and Camille, bless her heart, with her somewhat endearing and ineffectual, yet loud, alarming and automatic admonition of her dog Bella.

### 2: Auth, Navigation, and useContext, Oh My!

Holy moley is the standard screen-to-screen navigation library for React Native (`react-navigation`) better as of v5, and I was able to get a decent user authentication system set up in like less than a day of work, or at least _a_ user authentication system set up in less than a day, and worked out some bugs in my reasoning and understanding the next day. So nice! Everything is a component or a hook these days! I had no idea how to use the Context API when I was writing class components, too, coming off of Redux, and I'm still not sure I quite get it, but I know how to implement basic global state management, including user authentication, and wire it all up, and it's a beautiful thing. It used to be that you'd start a React Native project and then wrestle with these things for **weeks** and hopefully you'd get there with it, and not touch it again until you really, really had to.

### React Native 60+

Speaking of new hotness, I've never added so many dependancies that required linking and had them just _work_ before! Auto-linking is a beautiful thing, and developing with React Native has gotten _so_ much better since it first came out! And yes I _do_ feel like an old man because I was coding when ReactJS came out, and it's been a longer time between now and then compared to that moment and when JQuery came out! ... and yes I _did_ pull in the entirety of JQuery for `$.ajax` at one point, lol. It's been a long road.

The native side will still get you, though. I tried adding `react-native-splash-screen` to the project, which _really_ requires some modification of the native code, and I know I'd done it before because the old RunClub project had it, and I even got rid of that flash of a white screen that annoyingly accompanied my beautiful splash screen for it, but the basic templates have changed since then, and I totally broke everything. This is when I learned a lesson about keeping my project under source control! Or hopefully I learned it! I certainly learned about `git diff`, and that I've advanced enough that the manual pages for git commands aren't totally scary anymore!

### Setup

As of a couple weeks ago, I didn't have Internet at my apartment, and the cable I was using to connect my phone was wonky, and things are better now,, but they _sucked._ Can't forget that my dude in Lagos hasn't even been in contact for a week, and who knows if his country has like, electricity on the regular at the moment.

### Styled-Components, and Other Elegant Solutions

I didn't actually end up using them, though I was about to run into having enough components reused to start. The one thing that's a big **TODO** is to figure out exactly how the React Native `flex` attribute translates to, and can be translated back from, flexbox in CSS, because it's a whole thing. Most examples of other people's code is in the standard React Native `style={{ attribute: 'value' }}` format, but if your app gets big enough ... I mean, you _can_ keep doing that and use components, but I'm just so used to seeing CSS look like CSS, and being able to take in props in a styled component without having to remember to explicitly consume them ... I dunno, the mental model just feels nicer to me.

For about two weeks though, I hardly used styled-components, and was just throwing inline styles at things and seeing if I could get them to look okay. Same with things like state management, where I really only used Context because I couldn't figure out how to lift the state up properly, and prop-drilling ad nauseum. Oh and conditional rendering and abstraction, I just didn't feel like doing it, if the lines of code I'd have to write weren't going to save me time getting to my goal of sending a demo of the design concepts off to Dave. Maybe if I'd started earlier with it, the end result would have been more polished ... I'm not sure. Just something I'm still learning to keep an eye on.

Ooo, right, like Formik! If I ever have to build a serious form in React again, totally reaching for it, but for little stuff, a controlled component is just so many less lines of code! Forgot about that one ...

### Looking Back, The Gist

Wow, so the big themes are that each of the problems I faced were solved by taking a step back and being able to think clearly, that it's a lot of work every day to be doing this thing, that it doesn't need to _feel_ like a lot of work if I'm taking care of myself and am being mindful of really experiencing the process, including all the tangential things like participating in the community, and that I really have come a long way here, and also have a long ways to go.

I'm so glad I started writing about this every day! I'm sorry if anyone is actually reading along, lol, especially two days ago where I realized the description in the frontmatter of the markdown document wasn't necessarily displayed in the post, so the first sentence just went massively _whoosh,_ but just for me, I'm going to wake up tomorrow and know that I can really do this thing, and it doesn't matter in the long run whether that company gires me or not, I've got a lot of value I can add to the world and I'm going to do it!

Allonz-y! ... and best wishes, 😄
~g
