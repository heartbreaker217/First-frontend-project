import getRandomInt from '../utils.js';
import { game, gamesLoop } from '../index.js';

const getCalc = (operator, number1, number2) => {
  let answer = (number1 * number2).toString();
  if (operator === '+') {
    answer = (number1 + number2).toString();
  } else if (operator === '-') {
    answer = (number1 - number2).toString();
  }

  return answer;
};

const generateCalc = () => {
  const firstTerm = getRandomInt(0, 100);
  const secondTerm = getRandomInt(0, 100);
  const operators = '+-*';
  const operator = operators[getRandomInt(0, 2)];

  const question = `Question: ${firstTerm} ${operator} ${secondTerm}`;
  const answer = getCalc(operator, firstTerm, secondTerm);

  return [question, answer];
};

const calc = () => {
  game('What is the result of the expression?', gamesLoop(generateCalc));
};

export default calc;
