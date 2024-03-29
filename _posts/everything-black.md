---
title: Everything Black
date: "2020-03-30T10:28:09.245Z"
description: "Gareth finds a new song he loves!"
---

[I could listen to this all day. (Everything Black by Unlike Pluto)](https://open.spotify.com/track/3UEnF6y5tyHVtMzldS3svp?si=wobwoDkARLme9BT_yqT10w)

Aaaaalright! I've got to be more focused than yesterday. Or ... well, focused on the right things, because I definitely got some practice in trying to solve something seemingly intractable ... and failed, lol ... but I can still develop the iOS app, and I've got to make as much progress as I possibly can today so that I can have busted this out over the weekend and send it along to Dave, and be free to work on other things. So:

- Get the list sort, list select, and QR code select working
- Get the route param to Logoing
- Set up the Logoing screen, that's the camera, camera roll button, shutter, draggable logo, and the instructions tooltip that's got to animate into the question mark icon
- That icon, tapping it should animate back out that instructions box ... and the first time it should be up for like a second and a half, and tapping anywhere should close it, then subsequent times it should be up ... five seconds? Indefinitely? Tapping anywhere should close it though. Maybe after five seconds an okay button should pop up?
- Anyway, get the camera and react-native-viewshot wired up, get the image, save it to the camera roll, or if that's cancelled go back to logoing, and then navigate to sharing, which I think I need to split up into the caption copying phase and the share to Instagram phase, because that's just a lot to expect of people that they'll digest everything in one screen. So screen one might be more instruction heavy, and have a button that copies the caption and gives you a nice animated check, good job, and then the next screen should have some more instruction and have an open Instagram button and an 'I did it' button, which should be disabled until the open Instagram button is pressed, and then that should hypothetically ping the server to check and see if they actually did it, send them to loading, and if it returns good, send them on to the home screen with the drawer and a pointer for where to see the status of the raffle or their reward or whatever we're going, and then if it doesn't, give them the error message and send them back to the logoing screen ... with the full stack history so if they don't want to take another picture and know how to navigate with gestures, they can swipe forward. Maybe even add to the instruction box.
- Getting the server up and ready will be a whole other thing. Should puh-robably wait until I hear back from the other devs/Dave. I can start on Run Club though, I just learned a ton about auth, navigation, etc etc. Okay go!

Okay, first thing was getting the actual app to launch, right? I brought a bunch of the files over from the last time I used React Native, and it's trying to load dependencies and breaking ...

Oh jeez, I just checked Google Analytics and people are actually going to my website. Oh boy. Maybe revisit that before Run Club.

Oop, step one, I set the isLoading flag off to try and bust through not having Internet on the emulator ... //

Okay, I got way further with the list sort going, typing in the TextInput filters the list! It's beautiful! And the route param is definitely being passed along. I took Dawa for another walk and put myself together, and I'm going to go over things from the navigation level again with my second cup of coffee to get my head back into it here. // Ooor I'm going to talk with the student loans people for a bit. Yay.

Ooof, okay, just fixed up the auth flow and the forms, learned about putting things you need to happen based on awaited values up in the try part of a try-catch rather than after, and the Formik is great, but the little things I'm doing with inputs and how easy it is to use state and handlers makes it more of a hassle than it's worth right now. And now we have app icons again yaaay :) Yea, that was totally broken though, if there was an access token in storage, it was just setting loading to false whether it worked or not, and then when I had auth set up recursively, I had the recursion set up wrong so it kept ... on ... running ... tryAuth() ...

My back is killing me, first upgrade purchase, unless it's a webcam, needs to be a new chair. Can't find handleSubmit ... hmm ... ah, handleFormSubmit ... ooo, and the hasTextBeenChanged state and the button being disabled worked, but it should automatically blow away the placeholder onFocus probably ... ooo, nice, got KeyboardAvaoidingView working, and wrapping the Text in a View stopped it from jumping up. Oh, and sending back params rather than sending callback functions through, that makes sense ... unless it causes ProfileCreation to rerender jankily. Ugh, it does. That's got to be a later thing though, it's noon, and I've fixed some things, but broken very little new ground. //

Alrighty, got WiFi! Didn't realize it was Monday, and not Sunday, until the WiFi guy called though, lol. Also my computer hasn't magically gotten better, oh well. I _did_ get a new cable that goes to the hard drive though! Apparently that's what's failing, not the hard drives, because I plugged a brand new hard drive in and it didn't see _that_ one either. I'm not sure what to do now, exactly ... I have a todo list that's just like the whole page next to me. Inhale. Exhale. Please can the debugger connect ... frozen at 4791/4791 ... reboot everything, lol.

Okay, awesome, list sort just needs case sensitivity and changing how submit works, select works, just maybe if they start to backspace that gets handled better ... oo, maybe showing the last time it changed? I could go down a rabbit hole there, also styling isn't great, logos aren't included yada yada. Sends the prop along though! I wonder if the couch might hurt my back less, lol.

Sweet relief! Except that Dawa is now ...

![Dawa needs attention](./oh-hai-there.jpg)

Hmm ... so the CodeScanner screen works ... sort of. It takes apart the url properly, it seems, and navigates to "Logoing", and passes along the business ... the barcode reader seems to keep on going though, like the camera is still on ... I wonder if conditionally rendering the whole screen would do it.

// Oh boy. React Native development is great when it's great ... not so much when it's not. Oh, it finally loaded. Holy moley. Why is the network suddenly dead though? Ahhhhh!

Yes! Conditionally rendering the CodeScanner screen totally shut down the camera! Starting to lose the ability to focus, though. Good day! Not as much done as I would have liked, but some solid progress where I thought I might get stuck. To the future!

And best wishes! ~g
