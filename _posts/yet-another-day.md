---
title: Yet Another Day
date: '2020-04-03T06:41:05.146Z'
description: 'In which Gareth is up bright and early!'
---

Good morning! Meant to be up at five, but resident tweaker-man wandered by barking swearwords at a quarter to, so up we got! Today it was, s#!% man, f%\*@#ing stupid-@&& lawers ... eep, lol.

I had some dishes to do anyway. Nothing like cleaning when you're angry. Take it out on the dirt, not your neighbors :) Made a delicious cup of coffee, too. Got the French presses clean and opened a fresh bag of a Costa Rican/Latin American blend, and brewed fifty-five grams using the Hoffman method, and it came out _perfectly._

On to coding, I'm going to recap a bit, because I've already been at it for like forty-five minutes here, I figured out the react-native-draggable thing! So, I've got to keep the x and y values of the draggable element in state, because ... hmm, well now that I'm making the images full-screen ... well, before I was making the images square because we thought we could send them right over to Instagram like that, now I don't know if I need to keep x and y in state for getting the composite image of the photo and logo ... and it might maintain position between navigation, too, I just really don't know, anyway, at the moment I'm using the onDragRelease event and running setXY({ e, gestureState }), but just saying setX(x + Math.round(gestureState.dx)) and setY the same way was sending the element off into the woods, and moveX/moveY just turned out to be the absolute values, and then I looked up ReactNative.PixelRatio, tried getPixelSizeForLayoutSize, which set it off to the moon, and then I looked down at the actual API and there's a .get(), so the solution ended up being just const pixelRatio = PixelRatio.get(); setX(x + gestureState.dx / pixelRatio), and I _keep_ typing pixelRation, lol ... anyway, it's a little wonky, but it seems to work better than anything else ... except possibly just not managing it, but I haven't quite got to the snapshot part yet.

At the moment, the camera is definitely working, and the shutter is definitely doing the thing, but then the image isn't displaying, and also it takes like, more than a second for it to figure itself out, so something is amiss there. Also, I can only get the shutter to render by putting text in it, which is annoying. I'll probably tackle that first, it's not the most important, but like, come on. Render a circle. Render it.

... That was easy. Empty \<View />. Bada-bing. Now where's this image going?

Lol, episode three hundred and forty-three of Gareth Is A Silly Goose, I was setting width and height props, it's style={{ width: width, height: height }} ... oh, that's a beautiful thing, look at that! Woot! Next up, why isn't the draggable element the restaurant logo? Oh, jeez, and I keep on blinding myself by switching over to the browser in light mode ... ahhh.

Ayy, there it is! ... Why did that work? Undefined ... hmm ... yaaay it worked! First off, business was the route param, _restaurant_ was the object with the logo, and I just needed to tack on a \[0] to the filter!

Lol, CameraRoll has been removed from React Native and now we're using @react-native-community/cameraroll ... take your eye off it for a second and it changes, good ole React Native :)

Sweet, okay, CameraRoll working, ViewShot working, I just need the Draggable in there ... or to render in another Image at that x and y ... is that why we needed to keep track of the x and y? I'm not super certain I ever got this right the last time I made this in React Native, actually, I think that was one of the reasons I went with the PWA, lol.

Okay, now do I need to set position: relative on the parent \<View>? Nope! Working! Oh ... so close ... The image is showing up like a little up and to the right of the draggable element. I wonder if moving draggy-doo inside the viewshot view will do it to it. Starting to lose it a little here, might be time to walk Dawa. Okay, SWEET, could do it with the draggable element, conditionally rendering it along side the camera, all that jazz, just it's still like ten pixels up and to the right, and I have no idea why, but it's saving it to the camera roll, and I'm going to map out the states of this screen next and do the whole infobox thing that was like, the main thing I was doing all of this to show off, lol. Lot of learning though! // Okay, well, dog walked, and I think I've got to get a workout in or my body is going to rebel ...

// Alright, dope, got a workout in, put myself together, tried to walk the dog ...

![Dawa didn't want to go for a walk](/please-no-walk.jpg)

... and got my own walk in to get some snacks and think through the rest of the day.

Basically, I'm going to finish up the Logoing screen and just fudge the ten pixels thing, maybe try and fix the slight jank of the draggable component, get the info box thing going, get the next few screens written, hard-code the profile creation image, and then I'm going to make a video about what's changed, why it's better, how the flow goes, where the server side needs to do its magic, and then hopefully Dave's people can take it and run with it, if he's paying them and they know good sense when they see it. Who knows. Hopefully then I'll never have to add a logo to anything ever again though. I'm only going to put as much polish on it as I can get to by the end of the day today, though, because I need to be working on something else now. Maybe Run Club. Who knows. Or if Dave wants to pay me, fabulous, back to freelancing. Ready, set, go!

// Well ... that _was_ going well ... why isn't the silly logo staying in place for takeSnapShot?! Ahhh, lol.

// Whoa, okay, lost myself in it for a while. At this point I'm starting to lose it a little, and I think I should probably push finishing up to tomorrow morning ... which made me look back at the code I was working on, and I think I know why that wasn't rendering, I need a seperate block for conditionally rendering the modal of checkPost type. Okay, well, long overdue on walking Dawa, little trooper.

Oh _also_ though, the linking URI worked! What! It wasn't working last time I checked! Miiiight have to rethink whether the image needs to be made square.

Hopefully I will wake up with some answers and some motivation tomorrow! Sleeping in (until six :)!

Best wishes!
~g
