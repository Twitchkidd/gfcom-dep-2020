---
title: We're Half-way There!
date: "2020-03-19T09:09:03.284Z"
description: "Hooold on! We're living on a `gatsby develop`"
---

I need to put my heart into it today, that's how we're going to make it through.

Okay, so the design thing ... I think if I can get the major blocks of content squared away, and then handle positioning the content within them to get what I want, that's how we're going to do this.

Indentation? Indentation.

Okay brain, vroom vroom. I started with coffee _after_ walking Dawa and putting myself together today because it's raining and I'm feeling not-so-great and wasn't going to try and handle a coffee cup, umbrella, and dog, but it's definitely taking a bit to get going.

So we've got padding on the body ... oh, _I_ put that there. Then the top level div in Layout ... which is about to get capitalized, I have to make this project feel like mine, you know? And I capitalize component file names. And all exported from an index ... oh no, apparently no indentation, prettier deletes it on save. \\t?

\tIndentation? LOL nope.

&nbsp&nbspIndentation? Well, cool, \&nbsp\&nbsp works, destroys my own readability though. First world problems.

Anyway, we've got the padding left over from the last project that I copy-pasted in, some of which needs to stay because I've got the 16px ::before, whiiich I just realized I needed to fix for mobile, where it's 12px on top. Alright, blew that away, now we've got got the 2.175rem padding on top and bottom and 1.0875rem padding to the left and right, header is a header with an h1 with marginBottom, then a main with no styling, then a footer with no styling. Eugh, so the styling for the Bio component is kind of annoying, what do we have here ... the wrapper is display flex with a marginBottom of 3.625rem, and then the image wrapper is 50x50 with a marginRight of 0.725rem ... then typography.js is applying a marginBottom of 1.16rem to img tags, interesting what they're doing with the picture element there ... okay and then the p tag gets marginBottom 1.16rem from typography ... then it's block level and block level for nav and main-content, where I'm going to want a flex wrapper. I'd love if I could get that image a little bigger, center align the text to it, push the title and bio back a little to create those key lines ... let's see what we can do with the picture first, because if it's too complicated to change that, then we've got how many pixels to push, lol.

Okay, gatsby-transformer-sharp is what we learn now ... whoa. Okay. Crazy. GraphQL coming back, that's how you name something, those are arguments, that's a fragment ... [which isn't available in GraphiQL](https://github.com/gatsbyjs/gatsby/issues/9882) ... yaaay, I did it! Got avatar for blog posts, and bigAvatar for the main page, lol! 96px, then we'll want, let's see ... can I push things to the left with negative padding and not mess up the margin auto? Not going to lie, layout is not my strong suit.

Bwaa, no, and also I liked having more space at the top ... aww, sweet, dude! Good 'ole position relative and left -px! Okay, now the next steps are to get the nav and main-content areas squared away, and then I'm going to rewatch that video from Kevin Powell on designing with pseudoelements ... jk dog-walking time //

I love how going for a walk is so often the solution when you can't solve a problem. I was like, how can I possibly get the nav and main-content area to fill up the remaining space, and on my walk I was like, well durr, you know the heights of the other elements, use calc(100vh - all-that-jazz) and bada-bing, bada-boom. So let's see ... oh, jeez, need to add 16px of left to the main div, too ... well, 7.25rem to account for the vertical padding on the main layout div ... oh no, I have no idea why the header is that height. This is why element queries would be dope. Oh, there's a library called react-sizeme, this is going to be a pain in the butt ... that's okay, let's do it. Eugh, so ... I need the header component to be aware of its size and pass that back up to the state in the index page, as well as the footer, as well as Bio ... all of this is massively overkill, and I should have just rolled my own typography ... should'a, would'a, could'a, let's get this done. Is this the case for useEffect? //

Ahhh! I'm trying to work, but from being outside for a while and not being able to warm up, and the people yelling outside, and the people yelling upstairs, and the chicken on the stove for Dawa popping and crackling, and the stupidly loud cars in the parking lot, I can't concentrate! I'm tired, and headphones aren't going to help. Oh, fuck that dude whose only mode up or down the stairs is 'run as clompily as possible.' I need to follow Meg Lewis' advice and listen to my brain, and I'll be more productive later.

Signing out, and best wishes, ~g
