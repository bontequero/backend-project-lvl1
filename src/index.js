#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const actual = readlineSync.question('May I have your name? ');

const welcomeMessge = `Hello, ${actual}!`;

console.log(welcomeMessge);
