import game from '../index.js';
import getRandomInt from '../utils.js';

const getGCD = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    let firstNumber = getRandomInt(0, 100);
    let secondNumber = getRandomInt(0, 100);

    const question = `Question: ${firstNumber} ${secondNumber}`;

    let answer;

    if (firstNumber === secondNumber) {
      answer = firstNumber.toString();
    } else {
      while (firstNumber !== 0 && secondNumber !== 0) {
        if (firstNumber > secondNumber) {
          firstNumber %= secondNumber;
        } else {
          secondNumber %= firstNumber;
        }
      }
      answer = (firstNumber + secondNumber).toString();
    }

    result.push([question, answer]);
  }

  return result;
};

const gcd = () => {
  game('Find the greatest common divisor of given numbers.', getGCD());
};

export default gcd;
