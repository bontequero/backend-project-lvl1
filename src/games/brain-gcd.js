import getRandomInt from '../random-int.js';

const minNumber = 0;
const maxNumber = 100;

const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) {
    return gcd(a - b, b);
  }
  return gcd(a, b - a);
};

export default () => {
  return {
    task: 'Find the greatest common divisor of given numbers.',
    genQuestionAndAnswer: () => {
      const a = getRandomInt(minNumber, maxNumber);
      const b = getRandomInt(minNumber, maxNumber);
      const printed = `${a} ${b}`;

      const answer = gcd(a, b);

      return {
        question: printed,
        answer: `${answer}`,
      };
    },
  }
};
