---
title: A Day
date: "2020-04-02T07:23:09.810Z"
description: "In which Gareth has his fingers and toes crossed!"
---

AHH!!! Okay, shake it out, code it out, code it up, let's do it up!

I've got this phone call at 1 o'clock today and the anticipation is tangible! I'm going to work on Logoed until then, and then I promised Dawa a bike ride! Hope for the best, prepare for the worst, if this goes well it could literally change my life, if it doesn't, it needs to not be the end of the world. Inhale. Exhale. :)

Where were we with Logoed? Just handled the new dependencies and imports, time to try and convert the Logoing screen to a functional component and get that information box to icon thing working, which is like 90% of the reason I'm working on this project again. Crazy how you can just wake up with your brain on fire sometimes!

Oh, wait, navigation first. I guess I don't really need to be using context there, but I'll want that wired up when actual user data happens, maybe I'll just leave it, though the ProfileCreation and Logoing stacks can get combined. // Oh maybe _not_ though, I can't see where to conditionally pass in an initialRoute ... I guess if the ProfileCreation screen rendered null until it checked for the piece of context ... You know, let me see if it checks the parent navigator for a screen named BusinessSelection, I imagine that's a better way of doing this ... Nnnope, not BusinessSelection ... Oh, lol, doesn't have to navigate at all, it needs to set the context, herp derp ... which ... is not conditionally rendering the Logoing stack ... maybe it's part of the root stack though? Weird! Only the other screen that wasn't part of that block is accessible! Oh, whoa, pop isn't working either. Wait but if I set a useContext to be fired by instagramHandle[0], RootStack rerenders? I've got to restart the packager and reinstall the app to make sure that's not a bug. Nope, it was a bug, lol, it's definitely calling that function, but not rerendering ... Oh whhhyyy, okay, let me try and change this ... I'm changing the useState function, the setState in useEffect, the value passed to the Provider, which is where I think it might break, and I'll try passing the whole array if it does ... and the condition in the return statement ... oh wait, I'm _not_ going to change the value passed to the provider.

Oh, yea, no, it did not like that. Oh boy ... Okay, so

## Context and Conditional Rendering

This works, I'm not super sure why:

### ProfileCreationContext

`import { createContext } from 'react';`
`export const ProfileCreationContext = createContext(null);`

### Navigation

`import { ProfileCreationContext } from '../contexts';`
`const RootStack = createStackNavigator();`
`const RootStackScreen = () => {`
`const instagramHandle = useState(null);`
`useEffect(() => {`
`instagramHandle[1](instagramHandle[0]);`
`}, [instagramHandle[0]]);`
`return (`
`<ProfileCreationContext.Provider value={instagramHandle}>`
`<RootStack.Navigator>`
`{`
`instagramHandle[0] ? (`
`<RootStack.Screen name="LogoingStack" component={LogoingStackScreen} />`
`) : (`
`<RootStack.Screen name="ProfileCreationStack" component={ProfileCreationStackScreen} />`
`)`
`}`
`... ...`
`)`
`}`

### ProfileCreation

`import { ProfileCreationContext } from '../contexts';`
`export const ProfileCreation = ({ navigation, route }) => {`
`const [instagramHandle, setInstagramHandle] = useContext(ProfileCreationContext);`
... Oh, wait, ProfileCreation doesn't need that context any more ...

### Modal

`import { ProfileCreationContext } from '../contexts';`
`export const Modal = ({ navigation, route }) => {`
`const { type } = route.params;`
`const [instagramHandle, setInstagramHandle] = useContext(ProfileCreationContext);`
`return (`
`<TouchableOpacity onPress={() => setInstagramHandle(route.params.handle)}>`
`)`
`}`

... putting whitespace in backticks in markdown gets formatted out on save ... herp derp ...

WAIT NO IT DOESN'T WORK?!?! WHAAAT?!?!?! I swear, if removing the console.log broke it ...

Oooohkay, it's a race condition between the parent rerendering the stack and the onPress function running. Maybe. Sometimes it works with a 35ms setTimeout, sometimes it doesn't. 40ms is acceptable. Wtf though. Okay:

### Modal

`import { ProfileCreationContext } from '../contexts';`
`export const Modal = ({ navigation, route }) => {`
`const { type } = route.params;`
`const [instagramHandle, setInstagramHandle] = useContext(ProfileCreationContext);`
`return (`
`<TouchableOpacity onPress={() => {`
`setInstagramHandle(route.params.handle);`
`setTimeout(() => {`
`navigation.navigate({ name: "LogoingStack" });`
`}, 40)`
`}}>`
`)`
`}`

Crazy. I feel like if I had more experience writing promise generators I'd do something with those here ... or _something_, I don't know ... so hacky!! Anyway, _now_ to tackle the Logoing screen ... or walk Dawa again lol. // Well, _I_ had a nice walk and a juggle ... I took Dawa out, but it's windy, so he was afraid and we went back in. Sigh. On to coding!

Well, I've definitely grown as a developer, because there's _no way_ I would have written code like the old Logoing screen today. Whoa. Big oof. Pen and paper time for the layout. And another walk. //

Amazing how much a walk can do. Before all the code had just kinda started to blend together, now I think I get the heirarchy, what needs to happen onSnapShot, and I'm going to just go with the React Native flex implementation with inline styles rather than try and figure out how to get the same effect with styled-components ... for the moment. I've got an hour, it would be dope if I can get this working. //

Well in epidsode three hundred and forty two of Gareth Is A Silly Goose, apparently Calendly sends Google Calendar invites with a Google Hangout link, so, lesson learned, and ... call? rescheduled. I thought the email back with my phone number would have done it, but I bet that the person sending the Calendly invite was aware of how it worked and didn't get any prompts to prompt _me_ to check my Google Calendar invites. Or maybe I live under a rock. I'm back and forth between feeling like the embodiment of "Once Down Is No Battle," and feeling really, really shitty, so I'm going to dive back into this React Native project so that it's the RSOD telling me I'm shitty and not my own head. External forces are easier to deal with.

Best wishes,
~g
