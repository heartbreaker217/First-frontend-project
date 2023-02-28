import getRandomInt from '../utils.js';
import { game, rounds } from '../index.js';

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

const generatePrime = () => {
  const randomNumber = getRandomInt(0, 100);

  const question = `${randomNumber}`;
  const answer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

const loopForPrime = () => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    result.push(generatePrime());
  }

  return result;
};

const prime = () => {
  game('Answer "yes" if given number is prime. Otherwise answer "no".', loopForPrime());
};

export default prime;
