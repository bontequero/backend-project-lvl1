import getRandomInt from '../random-int.js';

const minNumber = 0;
const maxNumber = 100;

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export default () => ({
  task: 'Find the greatest common divisor of given numbers.',
  genQuestionAndAnswer: () => {
    const a = getRandomInt(minNumber, maxNumber);
    const b = getRandomInt(minNumber, maxNumber);

    const question = `${a} ${b}`;
    const answer = gcd(a, b);

    return {
      question,
      answer: answer.toString(),
    };
  },
});
