import game from '../index.js';
import getRandomInt from '../utils.js';

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

const gamePrime = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(0, 100);
    const question = `Question: ${randomNumber}`;

    let answer = 'no';
    if (isPrime(randomNumber)) {
      answer = 'yes';
    }

    result.push([question, answer]);
  }

  return result;
};

const prime = () => {
  game('Answer "yes" if given number is prime. Otherwise answer "no".', gamePrime());
};

export default prime;
