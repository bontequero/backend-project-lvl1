import getRandomInt from '../random-int.js';

const minNumber = 0;
const maxNumber = 100;

const isEven = (number) => (number % 2 === 0);

export default () => ({
  task: 'Answer "yes" if the number is even, otherwise answer "no".',
  genQuestionAndAnswer: () => {
    const number = getRandomInt(minNumber, maxNumber);
    const question = number.toString();
    const answer = isEven(number) ? 'yes' : 'no';
    return {
      question,
      answer,
    };
  },
});
