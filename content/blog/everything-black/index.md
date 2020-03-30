---
title: Everything Black
date: "2020-03-29T10:36:05.125Z"
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
