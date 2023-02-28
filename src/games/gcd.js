import getRandomInt from '../utils.js';
import { game, rounds } from '../index.js';

const getGCD = (number1, number2) => {
  let answer;
  let firstTerm = number1;
  let secondTerm = number2;

  if (firstTerm === secondTerm) {
    answer = firstTerm.toString();
  } else {
    while (firstTerm !== 0 && secondTerm !== 0) {
      if (firstTerm > secondTerm) {
        firstTerm %= secondTerm;
      } else {
        secondTerm %= firstTerm;
      }
    }
    answer = (firstTerm + secondTerm).toString();
  }

  return answer;
};

const generateGCD = () => {
  const firstNumber = getRandomInt(0, 100);
  const secondNumber = getRandomInt(0, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGCD(firstNumber, secondNumber);

  return [question, answer];
};

const loopForGCD = () => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    result.push(generateGCD());
  }

  return result;
};

const gcd = () => {
  game('Find the greatest common divisor of given numbers.', loopForGCD());
};

export default gcd;
