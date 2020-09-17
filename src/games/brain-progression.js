import getRandomInt from '../random-int.js';

const minNumber = 0;
const maxNumber = 30;

const minDiff = 2;
const maxDiff = 10;

const numElems = 10;

export default () => {
  return {
    task: 'What number is missing in the progression?',
    question: () => {
      const start = getRandomInt(minNumber, maxNumber);
      const diff = getRandomInt(minDiff, maxDiff);
      const position = getRandomInt(minNumber, numElems);

      const elems = [];
      let answer;
      for (let i = 0; i < numElems; i += 1) {
        const el = start + i * diff;
        if (i === position) {
          elems.push('..');
          answer = el;
        } else {
          elems.push(`${el}`);
        }
      }

      const printed = elems.join(' ');

      return {
        string: printed,
        answer: `${answer}`,
      };
    },
  }
};
