---
title: Rock, Roll, Repeat
date: "2020-08-05T09:15:56.891Z"
description: "In which Gareth rocks and rolls!"
---

Gooood morning! Dawa and I got out on a bike ride to Stenger Park after our first walk again today, and he got to run around with some huskies after running the trail with me, and we're ready to work at 9:15 here, and he'll be good for a long while today, so not bad. I'm drinking some cold brew made with a blend specifically made for it, it's crazy good. I haven't had black iced coffee that tasted _sweet_ like that, I don't think ever, this is really some good stuff.

Next up is Reactifying this layout, and since my build broke and I suspect just like, everything needs updating, I'm going to start from a new templete and build the site up from that again. Just like with React Native, it's often better just to blow the project away and start again, with all the dependencies that go into these projects. One of the nice thing about Python, that a lot was built in, but I was doing different stuff with it, and it's great that web technologies can evolve so quickly.

// Eugh, okay, third walk, _now_ we're good.

Gosh, yea, I checked the build files, it seems to just be a versions thing. Images working just fine when I copy my blog content over to the starter, for some reason it just isn't pointing to the file in /static ... oh, /static isn't being populated with any of the remark-images stuff at all. Ooohkay moving on.

Right, so most of the base stuff is copied over, now we're at the part that makes my head explode every time. There's index, which is obviously special, and then there's blog-post, the template, and both take in the Layout component, and then so the Layout component needs to be aware of it's location and split into different parts, so yes, start here, and also remember that if you need any more templates or pages ... oh, and 404 has it's own thing, too. And credits. ... and also, Layout takes in children, as well as location and title, and creates the markup for the header based on location. 🍝

Oh sweeeet, just needed to check gatsby config and make sure everything was valid and -gatsby-plugin-sharp was loaded first!

// Phew, got Dawa on another run around the block, champion of a little guy he is, then I got some groceries, got a chicken in the oven, back at it!

Yaaay thanks Shelly for the re-Tweet! Shelly's the best. Looking forward to showcasing some of her art in a side project!

Okay, let's get this thing done. The hard part really is that the degree of how convoluted the setup is, it's like a black hole sucking my attention in. I need some sort of diagram. Pen and paper time. Now I know at least the build isn't totally pooched.

Werd, so now I've looked through it and taken paper notes, and now _I'm_ pooched, and this whole operation is going to have to start tomorrow morning. Hopefully here's a picture of a dog!

![Dawa with hydrangeas](./dawaWithHydrangeas.jpg)

Best wishes!
~g
