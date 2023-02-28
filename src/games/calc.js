import getRandomInt from '../utils.js';
import { game, rounds } from '../index.js';

const calculation = (operator, number1, number2) => {
  switch (operator) {
    case '*':
      return (number1 * number2).toString();
    case '+':
      return (number1 + number2).toString();
    case '-':
      return (number1 - number2).toString();
    default:
      return false;
  }
};

const generateCalc = () => {
  const firstTerm = getRandomInt(0, 100);
  const secondTerm = getRandomInt(0, 100);
  const operators = '+-*';
  const operator = operators[getRandomInt(0, 2)];

  const question = `${firstTerm} ${operator} ${secondTerm}`;
  const answer = calculation(operator, firstTerm, secondTerm);

  return [question, answer];
};

const loopForCalc = () => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    result.push(generateCalc());
  }

  return result;
};

const calc = () => {
  game('What is the result of the expression?', loopForCalc());
};

export default calc;
