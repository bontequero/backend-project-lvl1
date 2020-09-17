import getRandomInt from '../random-int.js';

const minNumber = 0;
const maxNumber = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  return {
    task: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    genQuestionAndAnswer: () => {
      const number = getRandomInt(minNumber, maxNumber);

      const printed = `${number}`;
      const answer = isPrime(number) ? 'yes' : 'no';

      return {
        question: printed,
        answer,
      };
    },
  }
};
