---
title: Even Pour
date: '2020-09-15T07:32:32.971Z'
description: 'In which Gareth makes the best of a cup!'
coverImage: ''
---

Good morning! Yay I fixed the new-post script and made it delightful! Got some Node practice in, too, which I clearly needed, lol. Today's lesson was on using `figlet -l >> fonts.txt` then `const readInterface = readline.createInterface({ input: '/path/to/file', output: process.stdout, console: false });` and `readInterface.on('line', line => { console.log(figlet.textSync('New Blog Post!', { font: line, width: 80}))});` to print out all the figlet fonts saying, "New Blog Post!" and now my `np` command prints it out in one of the seven ones I like best at random!

![New blog post in a bunch of ANSI fonts](/newPostFonts.png)

Thanks to Vasyl Lagutin for writing [this article on best practices for reading files line by line!](https://stackabuse.com/reading-a-file-line-by-line-in-node-js/)
