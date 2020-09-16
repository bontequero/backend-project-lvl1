import getRandomInt from '../random-int.js';

const minNumber = 0;
const maxNumber = 30;

const operators = ['+', '-', '*'];
const computeMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export default {
  rules: () => 'What is the result of the expression?',
  question: () => {
    const a = getRandomInt(minNumber, maxNumber);
    const b = getRandomInt(minNumber, maxNumber);
    const op = operators[getRandomInt(0, 3)];
    const printed = `${a} ${op} ${b}`;

    const computeFn = computeMap[op];
    const answer = computeFn(a, b);

    return {
      string: printed,
      answer: `${answer}`,
    };
  },
};
