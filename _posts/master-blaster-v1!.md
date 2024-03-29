---
title: Master Blaster V1!
date: "2020-07-13T08:18:52.996Z"
description: "In which Gareth does a post-mortem, and planning!"
---

Good morning! Hope you're well today, I've just gotten to my desk, dog is walked, got a cup of cawfee heea, missin New Yawk just a little ;)

Okay, so, it's Monday, and Saturday I said, "Here, world!" with the program I've been working on for three weeks, which felt like tossing it into the abyss a little, which was to be expected, but now starts phase two! Very exciting! I'm going to split my time between making improvements, other coding projects, and coding-adjacent stuff like making moves on getting a job, rather than being totally obsessed with one thing to the detriment of everything else in my life, lol!

Good times, though, learned a lot. Let's talk about it!

## Python!

What a pleasure to work with! I wasn't sure I was ever going to branch off into different languages, I'd just spent so much time in JavaScript land, and other languages just felt like scary distant shores, what a joy though!

Not like I'm leaving JavaScript, I think. I'd been thinking of picking up a project to bring this flight/drive data filetype importing/exporting library to the latest version of Blender, and that's definitely still on the table now, especially now I have a better grasp of the language it's written in, but I really miss the web, and apps, and, go ahead, shoot me, semi-colons. I miss semi-colons. Especially with syntax highlighting, I think they make code more sparkly, and I like putting punctuation in my sentences, and in my code. Oh, and brackets, holy-moly, this indentation thing I cannot do. I know it's annoying when you get the number of brackets off, doubly so because it'll still run sometimes and do unexpected things, but trying to just look at it and try and count the blocks of whitespace to no no no, nope, do not want. Though, thinking back on it, I only really had trouble with massively indented code because of how I structured it.

Let's browse the code and see what jumps out ...

#### Imports

The actual syntax is nice, which can be said for most of the small words used in Python, `import questionary` or `from subprocess import Popen, PIPE` is great, the dependencies thing I still don't have my head around, because in JS it's either from node*modules, which, fair, is magic from the build tool, or it's `import AppTextInput from "../components";` if you're doing like `export * from "./AppTextInput.js";` from components/index.js, the ambiguity of where imports came from was just a little weird to me, but actually one of the **reasons** this project was well-suited for Python was that there \_weren't\* too many dependencies. The code that _edits your repos_ is right there, not super-abstracted with possible security vulnerabilities, other than me writing bugs into the code, lol.

#### Iterable Slicing, Working With Iterables

I miss JavaScript, here. Maybe my thinking is backwards on this, and am just experiencing Stockholm Syndrome, but having like slice, splice, the spread operator, and using forEach or map/filter/reduce explicity rather than ... well, it's definitely a little different than the Python way of doing things. I totally appreciate that it sort of encourages you towards abstraction, where in JavaScript after a map call you'll have like the place before the arrow or after 'function' for assigning whatever the arguments are going to be named, but in Python it's `for noun in nouns:` and you're off to the races. Possibly easier to grasp, I'm not sure. I learned in the context of React, from the beggining to today with hooks and stuff ... definitely helped having learned it the hard way like that, I think, or the Python syntax where the keywords are doing a lot of heavy lifting, character for character, would maybe have gone over my head.

That being said, I'm excited to go further down the Python way, pretty wild, man, pretty wild.

I'm also excited to refactor this beast ... let's just say it could be much better looking, lol. Let's talk about what I learned from a general project standpoint!

## Project!

First of all, yay, I made something! I'm pretty sure it does what it says on the tin, too!

#### Natural Language Hard

Okay, then though, writing text is _hard!_ Like the text the user reads. Copy? Anyway, that took a ton of energy to context switch from coding to writing, I need to do a better job of batching that stuff and when I need to do some on the spot, just not spending too much time on it. That and naming things ... like `localBranchInfoGitBranchStdout` or `confirmRemoveLocalDirectoriesAfterPrompt` ... very descriptive, but jeez ... but then I went to acronyms later on, so GitPushUpstreamOrigin just became Gpuo, but that wasn't much of an improvement, at least not when it was repeated over several lines ... refactoring the logging code into a function is one of the next things on the list, it's going to help make it more readable, hopefully.

#### Commenting!

As I started the project meaning for it to be open source, I paid way more attention to commenting my code than I ever have before, which I'm definitely going to keep doing! This probably falls under natural language being hard, too, but yea, having to describe what the code does with words is a nice little check that you're doing what you think you're doing. **Tests** is probably the next step on this road, lol.

#### Testing!

Yea, I kinda just tested that each piece of code worked as I went. I can see how this might not scale. (Lol.) To the future.

For what it's worth, though, Python seems to do what you think it'll do. Really nice.

#### Projects!

GitHub Projects has been awesome to use! I hadn't really used issue tracking before, it was a great way to organize what needed to be done and stay on task, though! I still used a fair amount of paper, maybe like 20-25 sketch sheets, it's just a lot easier to get my brain working when I'm holding a pen sometimes, but having a kanban board right on the same page as all the code really helped keep me productive.

I ended up not using the Software Requirements Specification that I made in a Notion doc as much as I thought I was going to. That might change in the future, I can see how a little extra time with the requirements might have helped.

## The Future!

What next? Well, the program isn't _done,_ really, though it's gotten to a point of completeness, from a certain perspective. It _does_ work. It could do more, it could be better tested, like on Windows machines, or it could be made to handle interruptions in the connection, which I think just knocks it over at the moment. It also needs to get used, and I need to get the word out, which is like a whole other thing.

I'd also like to split my work between that and some other projects I've got going on, like I got the artwork back from Shelly for the Polar Pairs game I was working on, and RunClub should be ready when the world is ready to socialize again, lol ... and my personal website still looks like the mess of hot garbage that took me like a couple days to throw together, definitely could be a better portfolio, lol.

Then there's updating my resume, writing cover letters, filling out applications, definitely crunch time there.

It's also a better time than ever for teaching more people how to code! I mean, sort of, there's a pandemic on ... Crazy world we're living in right now, keeping my spirits up though!

Next steps are to update the project for V1, since I kinda just put it out there without strictly sticking to it, and what's done is done, but it's time to set up the scaffolding V2, and also it wouldn't be super-nice for anyone else to walk in on expecting to pick up and issue or something at the moment.

Then I'm going to clean my apartment. Needs it. I've been totally obsessed for three weeks, and I do my best to keep things clean, and I think I vacuumed once, but there are dishes, very little food in the fridge, it's dusty, the vacuuming needs doing again, the bathroom needs cleaning, the patio needs cleaning, stains need obliteration, a colony of shrews has set up shop in the outdoor storage, you get the picture. (Jk on the shrews. Good luck with the gophers, Els!)

Ooof, then some business needs handling that I've definitely let slide, and yes, job, I know.

Exercise is handled, however, for the moment, lol. Yesterday I didn't type at all and just took excellent care of my dog, since I'm afraid he's ... well, I mean, definitely not neglected, he's been getting regular runs that you can see on my Strava profile, but I've been getting in every bit of coding that I could, taking my laptop to the dog park, only taking him on short runs sometimes, and I've been brushing him, but he needs more, especially with this heat, he can't be having any matting. Oh, but so yesterday I biked us over the bridge to Bluff Point in Groton and ran the trail with him there, which is eight miles total pulling him in the wagon behind the bike, plus the running, and I am _worked_ today! I was going to get up super-early, to be in the swing of things, but turned the alarm off at 4 and didn't get up until 7.

Time to make up for it! To the future! Best wishes!
~g
