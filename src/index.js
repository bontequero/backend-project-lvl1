import readlineSync from 'readline-sync';

const maxCorrectAnswers = 3;

export const getRandomInt = (minp, maxp) => {
  const min = Math.ceil(minp);
  const max = Math.floor(maxp);
  return Math.floor(Math.random() * (max - min) + min);
};

export const runGame = (game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  const welcomeMessage = `Hello, ${name}!`;
  console.log(welcomeMessage);

  const rules = game.rules();
  console.log(rules);

  for (let i = 1; i <= maxCorrectAnswers; i += 1) {
    const question = game.question();
    const questionPrint = `Question: ${question.string}`;
    console.log(questionPrint);

    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = question.answer;

    const isCorrect = answer === correctAnswer;
    if (!isCorrect) {
      const tip = `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;
      console.log(tip);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
