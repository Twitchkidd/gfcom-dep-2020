---
title: Do The Work!
date: "2020-03-25T08:53:11.111Z"
description: "Let's go do the work! Yea let's do the work! Ohhh let's go do the work! Yeeaa everybody doin' the work!"
---

IN WHICH GARETH DOES THE WORK, lol. That kinda morning. Not feeling it, but it's time to (you guessed it) do the work.

Okay, deep breath. Tabs. Implement tabs. Make tabs pretty. Next step forms. Make form. Make auth. Make menu for auth route. Switch projects. Make auth for projects. Make server. Handle auth for projects with server. Make forms for projects. Step 11: profit.

Time estimation practice! Implementing tabs: three minutes, 8:54 - 8:57, go!

... 9:24. So only ten times off, lol. What happened? Let's see ... the Nav component was off somewhere, so had to do that whole deal, and then I was rendering Buttons within Tabs when the Tabs were rendering buttons, also I had to use the restroom, also I got distracted and had to fix my tabs-test project, and then I forgot to destructure { onClick } from useTabsState(). Also, remember if you want to use a switch statement again in your JSX, the trick is to use an IIFE. Oof.

Hmm ... just deleted work from this file ... estimated that I'd be done with the next step by ten, from 9:36, so 24 minutes ... it's 9:51 ... what did I do with those icons? AAYYY, in ../dep/before-gastby/src/assets! Lolll ...

Eugh, `sudo yarn add yada-yada` ... no beuno! I have to nuke this machine soon. 10:12.

Oh, why is saving/formatting taking forever? Whoop, turn it off, back on again, works. Eep.

Ahh, I get so frustrated with CSS! With JS, you can just console log something and it'll tell you what's happening, unless it lies to you because it was pushed to the end of the call stack or it's a reference error or something, with CSS ... well, I mean, it's my own incompetence, I've got to look in the mirror on this, not out the window.

The _specific_ issue is "how to SVG?" I mean, I was able to load them through Gatsby by using the graphql query for their public url, as they're in the assets folder at build time, and then they worked as the source of image tags, but how to access their svg properties, to like change the color? Solution 1 is to go into the svg files and add the stroke color manually, which I could do but would be sub-optimal, as I'd have to have multiple files with different colors and switch between them if I wanted to change them like on hover, then a slightly better Solution 2 could be to use string interpolation and inject the variable that way, but like, also unwieldly, and then Solutions 3 through 5 are to set them as the background image of a div and filter the background, or figure out the 'use' tag, or some other way, because this is sort of all a bit of a mystery to me. Solution 6 is pick another library, let's see what we can do though.

Huh, okay, so stack overflow had a solution using a namespaced href, xlink:href, for use tags, but React said no can do, but MDN had just an href attribute ... so they're ... 0 x 34px ... whoa ... okay, so the solution, for the moment, is to use [this CodePen by Barrett Sonntag](https://codepen.io/sosuke/pen/Pjoqqp) to get a 'filter' for the svg imported into an image in the desired color. Hacky af, but it is what it is! //

Ooohhkeeeday! I'm going a little crazy here between the coughing neighbors and the yelling tweaker neighbors and that it's just _so_ cold, and I can't seem to warm up, but [the article recommended to me yesterday on Reactiflux by Kent C. Dodds](https://kentcdodds.com/blog/how-to-use-react-context-effectively) was a breath of fresh air, and even though I didn't totally understand 100% of it right away, it gave me confidence that there's a mesa of sanity, where if you can reach it, you can see what the heck is going on here with state management in React. I'm going to do my best to take the step back I need to take right now and get the styling right for these tabby-bits, and we'll do it up. (...what? Whatever, go!)

Mmm, nope. Nope nope. Done. Other things just happened. Work will resume tomorrow.

Best wishes, ~g.
