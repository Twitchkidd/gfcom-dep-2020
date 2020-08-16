---
title: Wrapping
date: "2020-07-26T10:43:27.871Z"
description: "In which Gareth wraps up master-blaster, like nine more todos here. Whoof."
---

Good morning! I just got all the todos to get this thing to like an acceptable state on paper, here, and Dawa's been run, he's chillen, let's do this! I'm going to title the sections what I wrote on the sketch pad:

### 1: Tell if it's local

Did this one, check. I wasn't sure I was running the script from the project or from pip, `print("hey")` did it though. :)

### 2: [List of changes to the text]

#### 2.01: Warrantee/Specify GNU 3+ at least

Lol first of all, GNU General Public License v3 or later (GPLv3+), good try, then currently, we see:

master-blaster Copyright (C) 2020 Gareth Field
This program comes with ABSOLUTELY NO WARRANTY;
This is free software, and you are welcome to redistribute it
under certain conditions;

and now:

master-blaster Copyright (C) 2020 Gareth Field
This program comes with ABSOLUTELY NO WARRANTY;
This is free software, and you are welcome to redistribute it
under certain conditions;
GNU General Public License v3 or later (GPLv3+);

So that's an improvement at least. The license calls for implementing show w and show c for displaying the warranty ... and ... copying ... and oh my goodness, I spelled warranty _way_ off when I wrote it down just now, "warrantee"? Lol, we'll just leave that in, but so I decided to go all the way in this direction for the warranty and intro text:

master-blaster: Rename primary branches of code repositories.
Copyright (C) 2020 Gareth Field field.gareth@gmail.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

Whew.

#### 2.02: master-blaster version in logfile.

Just in case anyone happens to still be using pre-1.0.5, so then their logfiles won't have it, and may be why they're having problems, apologies. Shouldn't have been anything too major, I hope.

Beuno. The intro also looks beautiful now.

#### 2.03: Switch log/Gihub notice, First:

Yeap, first part I did, changed the username prompt to have First at the front of it to be like "really, this is the starting point of the application."

#### 2.04: Confirm GitHub username

Starting with the primary verb good. More question marks bad. `questionary` is already adding question marks to every line after a prompt.

?
First, please enter your GitHub username!  
Twitchkidd  
? Confirm GitHub username: Twitchkidd (Y/n)

Better! Ooo!

?
First, please enter your GitHub username!  
Twitchkidd  
? Confirm username: Twitchkidd (Y/n)

Beuno.

#### 2.05: rm parens from repotypes

Oh, yea, I'm logging the option chosen, and right now the whole string includes an explanation that collaborator/organization updates are still in development. Okay, fixed.

#### 2.06: too many lines for local ask

It's true. Too long. But all of that was critical info, so it's two three line groupings now rather than one five line block.

#### 2.07: rm middle sentence projects q

Hmmm, what did I mean ... Oh, that's probably okay to stay, actually. Moving on.

#### 2.08: rm first part of token q, whitespace

Yea, the token question really needs tidying up. // Phew, that took a little doing. Got a link to the docs in there, looks more balanced ... oh yea!

?
-- Get a token! --

Since password-based token generation is being deprecated,
please get a personal access token with the correct scope(s)
to run this program!

To get this token, go to https://github.com, sign in,
then go to 'Settings', then 'Developer Settings',
then 'Personal access tokens', then 'Generate new token',
confirm your password, name the token in the 'Note' input field,
select the public repo scope, then 'Generate Token',
and then copy it to your clipboard.

Please save it somewhere first in case there's an error!

For more thorough (and visual) instructions in the GitHub docs,
see the personal access token part here: https://bit.ly/2X0cr3j

Paste it back here into the prompt and hit enter to continue:

#### 2.09: git branch is being printed

Okay, processLogger updated ...

#### 2.10: git alias printing

Yeap, processLogger updated.

#### 2.11: switch thank you and log

Nice. All the copy is tidied up, I think.

### 3: Local master delete logic

Okay, switch languages, this is a problem with my Python, not my English.

Ohh, that was a hack, lol, I really should have taken the time to refact it to an array, but instead I just made another parameter secondIgnoreStr="" lolll. Hopefully won't need to go too much further there! 🤣

Ooh, git alias is still printing, actually, my hubris bites me on the butt for not testing 2.10!

Fixed fixed fixed.

### 4: rm dir logic

Yea, running rm -dfR on anything unecessarily is no beuno.

Dope, needed to be handling error states with that process anyway. One more global variable, but no biggie.

Wow, and then that's it then:

### 5: Directories test

So this is where I need a repo to be in each of the following states:

Already has main, has master - External main conflict. (Seems the case could be made based on defaults as to whether to delete remote master.)
Already has main, doesn't have master - Already blasted.
Already has main, doesn't have master, and there's a local with main and master - Local master delete.
Doesn't have main, has master, default is master - Blast it.
Doesn't have main, has master, default is master, and there's a local - Locally blast it.
Doesn't have main, has master, default isn't master - Default not master conflict.
Doesn't have main, doesn't have master - Who.

Aside ... why is it still checking collaborator and organization repos? Oh, I've messed it all up, lol.

Best wishes, ~g
