import getRandomInt from '../utils.js';
import { game, roundsQuantity } from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }

  return false;
};

const generateRound = () => {
  const randomNumber = getRandomInt(0, 100);

  const question = `${randomNumber}`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

const runGameEven = () => {
  const result = [];
  for (let i = 0; i < roundsQuantity; i += 1) {
    result.push(generateRound());
  }

  game('Answer "yes" if the number is even, otherwise answer "no"', result);
};

export default runGameEven;
