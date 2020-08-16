---
title: Ahh!
date: "2020-07-27T11:51:06.570Z"
description: "In which Gareth attempts to make the program work again."
---

Good morning! Oh jeez, what a day so far! So I definitely messed the whole master-blaster program up, again, then I fixed it I think, but there's still a little bit to iron out. Fortunately, Dawa is cool just chillen for a while, since we got a nice trail run in, and I've had a second coffee, so let's do this!

Eugh, okay, the clone command is throwing a warning that needs to be handled, what else ...

Oh, lol, so what I broke, mainly, was if localDirectories was turned on, it would check the repo if it had a local directory, or if localDirectories was off, then it would check all repos, but I didn't have the else statement set up for if localDirectories was turned on and there was no local directory. Whooopsie.

Also, why is the rm temp dir command not running properly? And why is it running push --delete origin master? And why is locallyBlastIt being cloned?! Ahh!

Ohhkay, so if the remote is set with, say, 'twitchkidd' rather than 'Twitchkidd' with the capital T, the string check to see if there's a local copy of a repo fails!

Omg I think I did it! Yes! It all works!

// And I wrote out a contributing doc at the dog park!

And we're settling for having to `pip install questionary` and `requests` in order to run it for now, at least it's pip and not pipenv.

And it's on PyPi! Please nobody have gotten anything lower than v1.0.6, lol! Probably not.

And so that was task 8 from yesterday, and then there's just the last one, to get the word out about it! 9: Tweet!

Lol, I'm reaching for the command line because I'm still in the mode of working on `master-blaster`, but a) going to twitter.com is much easier, and b) done with working on `master-blaster` for a while! Almost a little bit of shock, like, wow, really, done for now, there's the version upgrade on pypi.org. Crazy.

Yea, wow, okay, Tweeting, it's happening, I sent out like seven messages in bottles ... ooh, TerminusDB said it "Looks great!" Wow!

Okay, other than being glued to Twitter, I'm done with this type of thing for the day, I'm wiped! It's cooking time, about to make some soup, rice, beans, and figure something out with red lentils!

Best wishes! ~g
