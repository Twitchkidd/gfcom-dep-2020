---
title: And Down For A Bit ...
date: "2020-03-17T13:38:03.284Z"
description: "Gareth gets some time to code, at least!"
---

Oof, what a day. Just jumped through every hoop to try and get tested, and at least got a doctor's note to quarantine for two weeks.

So like, eugh, I'm sick, hopefully things aren't going to get worse, but also like, ayy, it's "get a new job" time.

And given how my current boss has handled this, it's _definitely_ "get a new job" time. Goodness ...

So, as the coffee kicks in, I've got to get my bearings here. Oh yea, let's see if the Google Analytics thing got any hits! ... and we wait, lol ... I thought I'd be slick with it and just use my phone's unlimited data plan and good connection around here for my Internet, but it turns out there's a cap on high-speed data as a hotspot ... Hmm, didn't seem to record anything. Maybe I'll have my sister Elsbeth go to it a few times, if she has time. They're self-isolating, too. Crazy right now.

Okay, vroom-vroom, let's do this thing.

Okay, so there's more under-the-hood things going on with images and stuff, I'd really like to get the main appearance of this thing a little closer to what I had with the create-react-app version, and ideally somewhat further along with that, because more than I need this to do all of the really interesting stuff I'm looking forward to doing with it, I need it to look presentable so I can start sending resumes out, like today.

The typography package, though, let me just look into how rhythm works ... oh, okay, that's a function of line height, I saw like `rhythm(3 / 4)` and thought we were doing something super fancy. I mean it's fancy, but ... got it, okay, keep moving. Definitely lost a minute looking at different typography themes and am definitely going to go with a different one than the project comes with ... to the future though.

Okay, orientation ... /pages, top level is /pages ... index ... and here we've got a component that's the default export called BlogIndex, and because we're also exporting a const pageQuery which is a Gatsby graphql query, we get a ({ data }) prop, and I'm not exactly sure where ({ location }) is coming from, but we've got that too ... let me log that ... hmm, wonder what 'state' is there? Got it though, pathname, hostname, url, all that jazz. Oh, also I wonder what prism.css is, just checked out the imports in gatsby-browser ... oh a syntax highlighter! Oh, I'll have to use this!

Alright, then we've got the Layout component, taking in location and siteTitle, pulled from data.site.siteMetadata, then an SEO component, then a 'Bio' component, then a map of posts to article tags with all sorts of good stuff in there. I don't see any media queries on Bio, how resonsive is this? Hmm, okay, works with simple content ... and okay, so the blog-post template also uses Layout ... and so basically I want to retain that layout for blog content and pages like 'credits' for the icons I'm going to ~~steal~~ use from the wonderful folk involved in the Noun Project, but I want something custom for the landing page ...

Okay, interesting, so Layout gets location, title (siteTitle), and children, and switches what the header is based on whether the path is / or not. Oh, okay, so we've got h1s and h3s going on, and the h1 on the landing page is scaled up by 1.5.

Oh, _that's_ how to use styled components, with `gatsby-plugin-styled-components` and then `import styled from 'styled-components'` ... how do I use Prism for better syntax highlighting? So much exciting stuff to learn here!! First styled-components, and reorganizing the utils folder, pulling in my own stuff, injecting a global styles to get my fancy body{ &::before { going ...

Oh YAAAYYY!!! I know it's a split for everyone, how they write styles, but I've been using styled-components for years, it's how I do :) //

Okeeday, dog walked again, dishes done and ready to cook dinner, but let me keep going on this. SO happy that I could just bring over the global styles from the other project, colors and breakpoints up and running, I feel like we're rocking and rolling here. Oh the before pseudo-element doesn't work the same now the window can be scrolled ... hmm ... ohh, fixed it immediately, let's hear it for `position: fixed` ... but let's then hear it for some different typography, because the line height for paragraphs is way to small, and the font for headers is goofy.

Ohhkay, well I changed the theme and the fonts, and I like that links are underlined, because that's accessible, but the main header h1 needs to not be a link, and the colors need to be on brand, and also I haven't changed up like the main layout of the page yet, but we're getting there!

BTW the GitHub mobile app just dropped! Whaaat!! I think I'm done for the night, though, unless I get a magical burst of energy later, still sick and feeling it, lol.

Best wishes! ~g

P.S. Okay, I lied a little, opened everything up after walking Dawa again and feeding him, and the underline color for links is achieved with backgroundImage! Weird! I kinda want to just fork the theme and customize it that way, but that's _definitely_ a morning task.
