#!/usr/bin/env node

import readlineSync from 'readline-sync';

const answersToWin = 3;
const minNumber = 0;
const maxNumber = 100;

const isEven = (num) => num % 2 === 0;

const getRandomInt = (minp, maxp) => {
  const min = Math.ceil(minp);
  const max = Math.floor(maxp);
  return Math.floor(Math.random() * (max - min) + min);
};

const step = () => {
  const number = getRandomInt(minNumber, maxNumber);
  const question = `Question: ${number}`;
  console.log(question);

  const answer = readlineSync.question('Your answer: ');

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  const isCorrect = answer === correctAnswer;
  if (!isCorrect) {
    const tip = `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;
    console.log(tip);
    return false;
  }

  console.log('Correct!');
  return true;
};

const runGame = (num) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  const welcomeMessage = `Hello, ${name}!`;
  console.log(welcomeMessage);

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rules);

  for (let i = 1; i <= num; i += 1) {
    const isCorrect = step();
    if (!isCorrect) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

runGame(answersToWin);
