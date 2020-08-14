#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const fs = require("fs");
const fsPromises = fs.promises;
const { format } = require("date-fns");
const { exec } = require("child_process");

const askQuestions = () => {
  const questions = [
    {
      name: "title",
      type: "input",
      message: "Title:",
    },
    {
      name: "description",
      type: "input",
      message: "Description:",
    },
  ];
  return inquirer.prompt(questions);
};

const confirm = ({ title, description }) => {
  const question = [
    {
      name: "confirm",
      type: "confirm",
      message: chalk.green(
        `\nTitle: ${title}\nDescription: "${description}"\nOkay?`
      ),
    },
  ];
  return inquirer.prompt(question);
};

const init = async () => {
  console.log(chalk.cyan("New blog post!"));
  let answers = {};
  let confirmed = false;
  let errors = [];
  let slug = "";
  do {
    answers = await askQuestions();
    const { title, description } = answers;
    slug = title
      .toLowerCase()
      .split(" ")
      .join("-");
    const blogFolderContents = await fsPromises.readdir("./content/blog/");
    if (title.includes(":")) {
      errors.push("Title can't include a colon!");
    } else if (title[0] === ".") {
      errors.push("Title can't start with a period!");
    } else if (title.length >= 255) {
      errors.push("Title too long!");
    } else if (title.length === 0 || description.length === 0) {
      errors.push("Both fields required!");
    } else if (blogFolderContents.includes(slug)) {
      errors.push("Title must be unique!");
    } else {
      errors = [];
    }
    confirmed = await confirm({ title, description });
    if (errors) {
      errors.forEach(error => console.log(chalk.red(error)));
    }
  } while (!confirmed.confirm || errors.length);
  const { title, description } = answers;
  fs.mkdir(`./content/blog/${slug}`, err => {
    if (err) throw err;
    const capitalizedTitle = title
      .split(" ")
      .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
      .join(" ");
    let date = format(new Date(), "yyyy-MM-ddHH:mm:ss.SSS");
    let dateArray = date.split("");
    const arrayWithT = dateArray.splice(10, 0, "T");
    dateArray.push("Z");
    const dateWithTZ = dateArray.join("");
    const initialContent = `---
title: ${capitalizedTitle}
date: "${dateWithTZ}"
description: "${description}"
---`;
    fs.writeFile(`./content/blog/${slug}/index.md`, initialContent, err => {
      if (err) throw err;
      exec(`code . && code ./content/blog/${slug}/index.md`);
    });
  });
};

init().catch(console.error);
