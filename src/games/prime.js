import getRandomInt from '../utils.js';
import { game, roundsQuantity } from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }

  return true;
};

const generateRound = () => {
  const randomNumber = getRandomInt(0, 100);

  const question = `${randomNumber}`;
  const answer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

const runGamePrime = () => {
  const result = [];
  for (let i = 0; i < roundsQuantity; i += 1) {
    result.push(generateRound());
  }

  game('Answer "yes" if given number is prime. Otherwise answer "no".', result);
};

export default runGamePrime;
