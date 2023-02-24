import { game, gamesLoop, generateRound } from '../index.js';

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
  const result = generateRound(isPrime);
  return result;
};

const prime = () => {
  game('Answer "yes" if given number is prime. Otherwise answer "no".', gamesLoop(generatePrime));
};

export default prime;
