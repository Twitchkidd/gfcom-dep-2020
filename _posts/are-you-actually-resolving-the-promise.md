---
title: Are You Actually Resolving The Promise
date: '2020-09-10T06:08:51.009Z'
description: 'In which Gareth needs to add something to the checklist.'
coverImage: 'dozingDawa.jpg'
---

Good evening! I'd been blocked for two days on this bug, so let's out with what went down and the single keyword that squashed it!

Edit: good morning! Had to push this post back one more day, here we go though, let's get this post-mortem busted out and enjoy all the productivity that's been building up while I spun in circles trying to fix a bug! 🤣

### The Task

Next.js is a React framework that has recently added static site generation to it's repertoire, and the function to populate pages with data is called getStaticProps(). All data fetching, either over the wire or from the file system, that's where it goes, and the pattern I've seen is to write the actual functions in files in a 'lib' folder and import them, so we find ourselves with a lib/virtualGarageSale.js.

Next piece of the puzzle is interfacing with the Google APIs. The good thing is there's an npm package `googleapis` and documentation is okay, the bad thing is the code, at least [the Node quickstart](https://developers.google.com/sheets/api/quickstart/nodejs) leaves you in callback hell. Combined with the Next.js setup, getStaticProps() is calling listSheet() which is calling authorize() ... no, I can't even get it straight now, getStaticProps() is calling authorize() which either calls getNewToken() which calls ... no, wait! getStaticProps() is calling either authorize() or getNewToken() which calls authorize() ... which calls listSheet(). Then getStaticProps() needs the data from listSheet(), and how do we get it there?

### The Problem

Well, idiot me thought I could just create a variable that would be in scope, we set it to our data when it gets in, bada-bing, bada-boom. Does the site have a sound board yet? We need a buzzer sound. Imagine a buzzer sound went off right after I said that.

Turns out asynchronous programing, at this point, says 'ha ha ha' and wanders off to find a margarita.

The first attempts I made were to try different forms of async JavaScript to try and get the data out. You could see the data, too, which, I mean, that part was nice, but console.log(), that tricky lil guy, as we know from the Lyme Art Association project, sends things to the bottom of the call stack where everything is already resolved. So console.log() in the middle of ... where even are we ... listSheet() ... _that_ was showing all sorts of nice data, highlighted in green, all things a-go. console.log() in getStaticProps() returned a sad gray `undefined` for a long time though.

Actually, I wasn't even passing the right `undefined`. At some point I realized I wasn't actually returning anything. The variable I was using to, hypothetically, set the data, it was just being initialized and then passed to getStaticProps() and the whole Google thing was happening in the background going 'la la la'. So I set up a variable in each function that would catch the data and pass it along, and this is where we landed for a while.

Edit: I totally forgot about the whole JSON.parse(JSON.stringify(data)) part. For a while I thought the `undefined` was because ... oh, no it was saying the data being passed to getStaticProps() wasn't serializable, and I thought stringifying and parsing the data would somehow fix things. Valid attempt, wrong target though.

### Promises

After I actually was passing the right thing along and took out the top-level variable idea, console.log() in getStaticProps() finally returned something other than `undefined`!

`Promise { <pending> }` ... eh?

So promises are a special type of function that ... hmm, this is an interview question, I should be able to bust this out ... do they take in what to do with resolve/reject? No, right? I think the idea is that they return resolve or reject, and you handle them however you're handling your promises, using try/catch blocks, async/await, or the Promise object directly, and this is all an alternative to callbacks.

I tried **everything.**

This is why I was totally losing my mind at the end of this, because I tried every permutation of callbacks, try/catch blocks, async/await, setting _every_ function to async, forcing every function to return a promise with the `es6-promisify` package, bringing back the top-level variable thing, just every way you could configure these functions, and still getStaticProps() would just get `Promise { <pending> }`.

Did I think to modify anything in the file where getStaticProps() lived though? Nope! Why? No idea! I think I learned a lot while refactoring the async code, which was really the best takeaway here, but if I'd taken a step back and added **one** key word in the right place, I'd have saved myself two days of being unproductive. I've just _got_ to learn to do this more, though going down the rabbit-hole and paying extra attention to detail _are_ my strong suit.

### The Solution

Wrong => `const items = list ....

Oh, jeez, I _STILL_ don't have a good hold on it, getStaticProps() isn't calling bloody authorize(), it's calling bloody getAllItems() which either calls authorize() or getNewToken() which calls authorize() which calls listSheet().

Okay, so finally:

Wrong => `const items = getAllItems();`

Right => `const items = await getAllItems();`

That was it, just had to resolve the promise _at the end._ I think I'd had it that way originally, too, before I was passing things correctly through the functions, and I'd changed it to see if it fixed things and just never changed it back. Oof.

There you have it, though, virtual-garage-sale.js now has data, I've hopefully learned some things, and it's time for rock and roll!

### To The Future!

So it's Thursday now, Dawa has gotten a first walk in and has finally chilled out (I think these early mornings are a bit rough for him,) the caffeine is hitting, the post-mortem is written, and the next task it to turn this data into beautiful pixels and get on with the actual selling part of the virtual garage sale. 🤦‍♂️ The idea though is that it's going to connect all the various posts on various platforms and if someone wants something in the same vein as what they saw in one post they could find it, or if someone wants to support me in getting this thing done they can browse all the items. Also practice and portfolio/resume building. Eugh, at some point I have to fix up the main layout of the site, too. First thing's first! Roll that beautiful bean footage!

First thing, where do we destructure this? Probably in getStaticProps(), right? Let's try that rather than in the React component. Oh, actually, I can't pass a Set through getStaticProps(). To the component!

Ooo, nice. I love data manipulation. There, I said it, and I'll say it again, damnit, data manipulation is super duper satisfying! Give me some more map, filter, reduce, let's go!
