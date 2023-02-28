import getRandomInt from '../utils.js';
import { game, rounds } from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }

  return false;
};

const generateEven = () => {
  const randomNumber = getRandomInt(0, 100);

  const question = `${randomNumber}`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

const loopForEven = () => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    result.push(generateEven());
  }

  return result;
};

const even = () => {
  game('Answer "yes" if the number is even, otherwise answer "no"', loopForEven());
};

export default even;
