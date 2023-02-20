import getAnswer from '../index.js';
import { getRandomInt, makeIntro } from '../utils.js';

const getGCD = () => {
  let firstNumber = getRandomInt(0, 100);
  let secondNumber = getRandomInt(0, 100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  if (firstNumber === secondNumber) {
    return firstNumber.toString();
  }

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }

  return (firstNumber + secondNumber).toString();
};

const gcd = () => {
  const username = makeIntro('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3;) {
    const correctAnswer = getGCD();
    const userAnswer = getAnswer();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${username}!`);
    }
  }

  return console.log(`Congratulations, ${username}!`);
};

export default gcd;
