import React from "react";
import css from "../img/css-3.webp";
import html from "../img/html-5.webp";
import js from "../img/js.webp";
import react from "../img/react.webp";
import node from "../img/nodejs.webp";
import php from "../img/php.webp";
import taiwindcss from "../img/tailwindcss.webp";
import express from "../img/express.webp";
import git from "../img/git.webp";
import mysql from "../img/mysql.webp";
import mongodb from "../img/mongodb.png";
import typescript from "../img/typescript.png";

export const techs = {
  frontend: [
    {
      id: 1,
      skill: "HTML",
      ico: html,
    },
    {
      id: 2,
      skill: "CSS",
      ico: css,
    },
    {
      id: 3,
      skill: "JavaScript",
      ico: js,
    },
    {
      id: 4,
      skill: "TypeScript",
      ico: typescript,
    },
    {
      id: 5,
      skill: "React",
      ico: react,
    },
  ],

  backend: [
    {
      id: 6,
      skill: "Node",
      ico: node,
    },
    {
      id: 7,
      skill: "PHP",
      ico: php,
    },
  ],

  frameworks: [
    {
      id: 8,
      skill: "TailwindCSS",
      ico: taiwindcss,
    },
    {
      id: 9,
      skill: "Express",
      ico: express,
    },
  ],
  basesDeDatos: [
    {
      id: 10,
      skill: "mongoDB",
      ico: mongodb,
    },
    {
      id: 11,
      skill: "MySQL",
      ico: mysql,
    },
  ],
  otros: [
    {
      id: 12,
      skill: "Git",
      ico: git,
    },
  ],
};

// console.log(techs);
