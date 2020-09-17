import getRandomInt from '../random-int.js';

const minNumber = 0;
const maxNumber = 30;

const operators = ['+', '-', '*'];
const computeMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getRandOp = () => {
  const opCount = Object.entries(computeMap).length;
  const op = operators[getRandomInt(0, opCount - 1)];
  return op;
};

export default () => {
  return {
    task: 'What is the result of the expression?',
    genQuestionAndAnswer: () => {
      const a = getRandomInt(minNumber, maxNumber);
      const b = getRandomInt(minNumber, maxNumber);
      const op = getRandOp();

      const question = `${a} ${op} ${b}`;

      const computeFn = computeMap[op];
      const answer = computeFn(a, b);

      return {
        question,
        answer: answer.toString(),
      };
    },
  }
};
