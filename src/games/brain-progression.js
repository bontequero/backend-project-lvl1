import { getRandomInt } from '../index.js';

const minNumber = 0;
const maxNumber = 30;
const maxDiff = 10;
const numElems = 10;

export default {
  rules: () => 'What number is missing in the progression?',
  question: () => {
    const start = getRandomInt(minNumber, maxNumber);
    const diff = getRandomInt(minNumber, maxDiff);
    const position = getRandomInt(minNumber, numElems);

    let elems = [];
    let answer;
    for (let i = 0; i < numElems; i += 1) {
      const el = start + i * diff;
      if (i === position) {
        elems.push('..');
        answer = el;
        continue;
      }
      elems.push(`${el}`);
    }

    const printed = elems.join(' ');

    return {
      string: printed,
      answer: `${answer}`,
    };
  },
};
