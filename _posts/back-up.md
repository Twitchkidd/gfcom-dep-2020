---
title: Back Up!
date: '2020-03-18T10:24:03.284Z'
description: "It's game time!"
---

Good morning! Still not feeling like 100%, but I have routines to lean on. Get up (before the alarm today! Must have slept!) and make coffee, tidy up, walk Dawa, put myself together, work out, eat breakfast, take Dawa for a second walk, make a second cup of coffee, and it's coding time!

First thing, changed the title from Gareth Field, Dot Com! to Gareth Field ... Dot Com! because that sounds more authentically enthusiastic in my head, and changed the base maxWidth of the wrapper div so that it all fit on one line, next up is to fix that one thing about the typography plugin that includes its own color for link underlines, and to remove the anchor tag over the title, and then it's time to lay out the main content, and basically I want it to be like a tabs situation on desktop/tablet, and an accordian situation on mobile, and I'm not going to worry about the menu I was going to put at the top left, all those links can go in the footer, and _then_ I'm going to send out some resumes! I have no idea if I'm good enough, I've been doing this for six years now, but I've been working and handling life at the same time, but I need to get myself out there (digitally, lol, still under quarantine) and see what happens! So the plan is to get this site to a 'good enough' state, apply for some jobs, reach out to my social network, handle some administrative stuff, and work on Run Club afterwards, as a reward. Spencer Carli put out a whole series on react-navigation version 5, so that'll probably be my starting point to dive back into it.

Let's go!

... Let's also test block quotes!

> Give me your tired, your
> poor, your huddled masses
> yearning to breathe free, the
> wretched refuse of your
> teeming shore.
>
> Send these, the homeless,
> tempest-tossed to me, I lift
> my lamp beside the golden door!
>
> -- Emma Lazarus, 1883

Hmm, interesting, so `smartypants` works, though it turns the @ symbol into something obnoxious, and it ignored new lines. Does the pre tag work here?

<pre>
Words
on
multiple
lines ...
</pre>

Mmm, yea, but how to combine? That's not a now problem, that's a later problem.

> <pre>Give me your tired, your</pre>
> <pre>poor, your huddled masses</pre>
> <pre>yearning to breathe free, the</pre>
> <pre>wretched refuse of your</pre>
> <pre>teeming shore.</pre>
> <pre> </pre>
> <pre>Send these, the homeless,</pre>
> <pre>tempest-tossed to me, I lift</pre>
> <pre>my lamp beside the golden door!</pre>
> <pre> </pre>
> <pre>-- Emma Lazarus, 1883</pre>

Oh, now we have a font problem ... and smartypants didn't get the em-dash, either. Le sigh.

Layout time. Main objectives: alter 'bio' for landing page, set up the nav bar and main areas, make it work on mobile, make the footer content, and populate the main content.

Sweet, okay, bio adjusted, removed the title link on the landing page ... where to put this blog content? Oh, I'm going to have to store the current tab somewhere, because hitting back after going to a blog post should return you to the homepage with the coding tab selected and probably scrolled to the right place ... Ehhh, we'll get there, let's start by just omitting it and getting the area for the nav bar and main content set up on desktop, like, part one stuff here.

Alright, so main is just children of layout right now ... need a nav component ...

Lol I'm glad like every keystroke and error message aren't recorded ... as I totally forget how to author and use components for a split sec ... //

Okay, dog walked again, ready to tackle this nav thing. Just going to write the desktop version for the moment. Nav takes up a space, main takes up a space, main renders content based on what nav item is selected. ~~How hard could it~~ hOw HaRd CoUlD iT bE?

Lol, it'd be much easier without the local tweaker wandering back and forth in front of my apartment barking swearwords. But for the grace of God goes I, I suppose though.

Successfully extracted the BlogList into it's own component! I know I kinda asked for it by choosing gatsby-starter-blog, but I'm at the point where I can look at how data is flowing through this thing and make changes. Alright, why is my dummy nav component rendering first here, though? Mmm, okay, after header, before children, but on the landing page, bio is part of children. So nav should be part of index? Yyy ... yes. Maybe? This is where I need to use pen and paper for a sanity check ... no, I can think through this, I only need the nav component on the index page, the layout is included as part of the index page, and also the blog posts, but the blog posts are created as pages because of gatsby-node and the template file, so anything special I'd want to change about the blog posts, except for the bio which is aware of location, I'd change in the template file and possibly ... pass in ... no, it gets its own pageQuery, because its (they're) a page (pages,) and then anything special I'd want to change about the index page I change in /pages/index, which is the only place I want Nav, right? For the moment? And then how about main, because in layout, main contains children ... of ... of page, except layout ... nav is child of layout in main ... _other_ children on layout in main are affected by nav ... omg shoot me, yea, pen and paper diagramming time.

![pen and paper diagramming of website stuff](/pen-and-paper.jpg)

Sweeeeet, figured out images in blog posts, too!

Okay, so, section, article, or div? I remember listening to a JavaScript Jabber episode with the semantic HTML guy and he said to like never use one of those two, article or section ... section? Okay, are the elements semantically related, no, use div, got it.

Oh man, need state, reaching for hooks! I'm so modern, lol.

LOL oh no, I have no idea what I'm doing. Efffff.

Oh, J/K, I just needed to refresh the page. Silly me. Yay I get hooks! Sort of! We're passing functions, we're doing all that stuff, yeah! My legs are falling asleep! //

Definitely still sick, acutally took a nap there. I like _never_ take a nap, and I know like people are dying, so big whoop, but like I'm about as healthy as someone could expect to be ... anyway, I've got a moment here, must press on. Definitely not applying for jobs today ... I always think I can get so much more done in a day! Wtf, me?!

Okay, so right now we've got just a div with maxWidth set, marginLeft and marginRight auto, and padding. So let's see, we want height to be 100vh and overflow hidden, and then the mainContent div will be scrollable, and somehow we've got to establish first and second key lines for horizontal rhythm, with the title, avatar, and tab icons aligned to the first key line, and the blurb and tab titles aligned to the second, with content following. And my dog wants to be fed. So at least we got that far, lol.

Oof, so, got some conditional rendering going with an IIFE, because I like that inline style, dog is fed, dog wants another walk, check out [Healthcare Triage](youtube.com/healthcaretriage) for the latest on coronavirus Covid-19, stay safe out there, I'm going to call it, pretty productive day, maybe could have done a little better, what a time though.

Best wishes, ~g
