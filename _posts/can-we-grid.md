---
title: Can We Grid
date: '2020-08-27T07:04:59.886Z'
description: 'In which Gareth squares up. (Or rectangles, definitely love a good square though.)'
coverImage: city.jpg
---

Good morning! Definite Autumn vibes today!

Ohh, two things going on right now, I've got the logic for splitting mobile and desktop modes in my pasteboard, layout, appwrap, tabs, morelessbutton are shared, modal is not, let's just start here so the code lights back up, lol.

Yaaay it formatted! Always a good feeling! Just needed a fragment, no biggie.
Why no grid, website?

### Mobile mode:

#### Grid elements

- AppWrap (check, though whether the grid defined is correct, who knows)
- Header1 (is a flex item in desktop mode!)
- Nav (is a flex item in desktop mode!) (putting it under mainoverlay!)
- MainOverlay
- MainWrap

#### Absolutely positioned

- MoreLessButton
- Modal

#### Relative positioned check

- AppWrap

### Desktop mode:

#### Grid elements

- AppWrap (check, though whether the grid defined is correct, who knows)
- Sidebar
- Header2 (is a flex item in mobile mode!)
- MainOverlay
- MainWrap

#### Absolutely positioned

- MoreLessButton

#### Relative positioned check

- AppWrap

Okay, I feel like I'm going crazy here, I'm **sure** that I just went over how to use localStorage and what the difference between it and sessionStorage was, and that there was a nice React library, I guess I took no notes though?

Well, let's get this published, I have to transition into a different mode for the rest of the day here, so I will publish the changes I've made so far and if I get everything done I need to get done, I can get back to this this evening. Until then, or if I don't get back to dev stuff today, best wishes! ~g
