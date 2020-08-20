---
title: Renderer Goes Rrrrready On Localhost 3000!
date: '2020-08-19T10:17:38.362Z'
description: 'In which it renders!!!'
---

Good morning! Wow, it's morning still! Holy moley! I was up a quarter after five, and it's a quarter after ten now, might as well be last month though. Got Dawa out for a first walk, got crackin' with the clickity-clack, and THE NEW SITE IS RENDERING! YEA!

First a recap of yesterday, for continuity. The big thing was really doing the second part of the interview process at iFit. I poured my heart into the writing portion ... ooo I hope I get this! After doing that, I needed to work it out a little, so I got a run in for myself, then took Dawa to the trail behind the dog park in Waterford, and I got an evening session in, too, totalling eleven miles running, two with Dawa, four and a half barefoot,1 and nine biking, five pulling Dawa behind in the trailer. A little sore today, feels good though!

Dawa and I have already been for a second walk, too, we got like a mile of running in, I should put that in as a manual activity, the GPS wasn't running ... alright, not sure if we're going to need another walk before it's supposed to rain a little here.

So now, the code works, I mean, to the extent that it does, which is to say the homepage is loading, posts are loading, images are working, the styles are kinda messsed up though, and the current structure includes main images per post, which previously I hadn't accounted for, and it's set up for multiple authors, which looks a little silly if it's myname.com and just me. Then there's the new layout of the homepage to implement, and there are a few libraries I'm so excited to use, zustand is this custom hook builder for state management, where you construct your store and updating functions inside the hook definition, and boom,

`const [statePiece, setStatePiece] = useStore();`

And then I've got open the old version of the site with Gatsby, and the example of next-blog-starter, for references to the styles, and I think I just need to make a list of diffs, assign each a point value, and game on. Starting with the post might be best, as it's a little simpler.

// Mmm, surprise bonus task, answering the question whether the button Next put in the bottom right goes away in the build version, it does. Added Live Server back to the list of VS Code extensions, I'd forgotten about it.

Now I've rolled the dice, or the Node instance, in this case, and it landed on updating the footer content, for ten points. Go!

Right now it looks like a link back to the homepage, pretty much unstyled. In the example, it's got "Statically Generated with Next.js." and then a button saying read documentation and a link to view on github ... except the button is a link, and the link doesn't really look like a link, though it at least has underline on hover? No tab focus though, wtf. The footer is also blocked a slightly darker grey with a hairline top border, slightly darker grey still. On the old site, I had a picture of my face at the bottom, then "Written by Gareth Field, a trail runner, developer, coffee lover, and dog dad based out of beautiful downtown New London, Connecticut!" and then a link inline saying, "Follow him on Twitter!" which is at least styled somewhat, and then there's a link to the previous post on the bottom left and at the very bottom a copyright sign and the year, and "Built with" and a link to "Gatsby".

I think I like having the copyright sign, the year, and maybe a "Built with Next.js." and a link to it. I'd like a return home in the middle, then previous post on the left, next post on the right, and above that row a row of socials, then my face and the blurb, just a little truncated maybe.
