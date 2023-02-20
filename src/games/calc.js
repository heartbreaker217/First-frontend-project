import getAnswer from '../index.js';
import { getRandomInt, makeIntro } from '../utils.js';

const getCalc = () => {
  const firstTerm = getRandomInt(0, 100);
  const secondTerm = getRandomInt(0, 100);
  const operatorsQuantity = 2;
  const operatorIndex = getRandomInt(0, operatorsQuantity);
  let operator = '*';
  if (operatorIndex === 0) {
    operator = '+';
  } else if (operatorIndex === 1) {
    operator = '-';
  }

  console.log(`Question: ${firstTerm} ${operator} ${secondTerm}`);
  let answer = (firstTerm * secondTerm).toString();
  if (operatorIndex === 0) {
    answer = (firstTerm + secondTerm).toString();
  } else if (operatorIndex === 1) {
    answer = (firstTerm - secondTerm).toString();
  }

  return answer;
};

const calc = () => {
  const username = makeIntro('What is the result of the expression?');
  for (let i = 0; i < 3;) {
    const correctAnswer = getCalc();
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

export default calc;
