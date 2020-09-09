import { getRandomInt } from '../index.js';

const minNumber = 0;
const maxNumber = 100;

export default {
  rules: () => 'Answer "yes" if the number is even, otherwise answer "no".',
  question: () => {
    const number = getRandomInt(minNumber, maxNumber);
    const answer = number % 2 === 0 ? 'yes' : 'no';
    return {
      string: number,
      answer,
    };
  },
};