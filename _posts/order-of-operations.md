---
title: Order Of Operations
date: '2020-08-24T07:02:12.821Z'
description: 'In which our morning starts with #Dawa { visibility: visible !important; }'
---

Good morning!

☕ It's coffee time!
💻 And coding!
🐶 Dawa's handled!
🏃‍♂️ Let's go!

## Blog Rewrite

### Main Content Layout

The main content grid needs to adapt to how the markup changes between the mobile and desktop versions.

// Whoa, got sucked into it for a while there, my coffee got cold, and that's nothing to say about the coffee. Dave's Roastery, Blind Pig Blend. Decent stuff. Fresh enough beans at least, and it's got a bit of pop to it.

Just busted out so much React! I had the whole markup in HTML for mobile and desktop, now the mobile is converted, even if the components haven't been fleshed out yet, and the state for mobile/desktop is set up ... it's been a few hours, though, that's about what I can do for the moment, breakfast and walking Dawa again need to happen. 😃

//Oh, man ... so Dawa and I got to Harkness, though I allowed us to abbreviate the run slightly. Eighty-one degrees and feeling like eighty-five is a lot for the little guy, but at least he got the bike rides in. I think my legs are going to fall off.

Back to the markup! Mobile was a veritable joy to bring over to React, once I got into the swing of it! Desktop and diffing time! // Yay! Index is 500 lines, but it's semantic! I'm going to just try running it and see what it yells at me for!

Can't resolve 'sweetGradient.jpg' ... probably didn't use a jpg ... correct, png.

Can't resolve '../../siteMetadata' ... well it's not two levels up ...

Can't resolve 'delightButton.svg' ... ah, well, I hadn't made it yet ... alright, +1 for The Noun Project ...

'/dog' ... '/dog.svg' ... '/navIndicator.svg' ...

Could not find files for / in .next/build-manifest.json ? Rut roh ... try yarn build ... Gatsby? Oh, delete DepNav.js ... named import for fs? Noo ... why are we not finding fs? Okay, maybe because I'm callin an import from ./lib outside of the special next methods ... okay, Credits is not defined? Okay ... now codingref.current is undefined?

Oh snap, it rendered! It's still in the loading state though ... hmm ... Going into the depths of useEffect, lol ... Okay, THIS one may have been an effect of using Python, I put a negation in a place that doesn't make sense in JS ... aaand you actually have to _call_ Math.random() ... AppWrap not defined ... back around to random ... Title isn't defined ... TabsWrap ... three more components ... two more ... okay break time ...

/// Oof, nope, that was done time. Okay, so from early tomorrow morning, from then, what did we learn yesterday? Don't put random things in lib, it's all looked at during the build, if you're pulling from there from client side code, that's bad. More than that, for sure, that was a good one though, and I have to take Dawa out, so signing out for now and back in in the next post! Best wishes! ~g
