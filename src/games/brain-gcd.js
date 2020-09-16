import { getRandomInt } from '../index.js';

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

export default {
  rules: () => 'Find the greatest common divisor of given numbers.',
  question: () => {
    const a = getRandomInt(minNumber, maxNumber);
    const b = getRandomInt(minNumber, maxNumber);
    const printed = `${a} ${b}`;

    const answer = gcd(a, b);

    return {
      string: printed,
      answer: `${answer}`,
    };
  },
};