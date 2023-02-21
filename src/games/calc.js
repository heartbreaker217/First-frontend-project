import game from '../index.js';
import getRandomInt from '../utils.js';

const getCalc = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
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

    const question = `Question: ${firstTerm} ${operator} ${secondTerm}`;

    let answer = (firstTerm * secondTerm).toString();
    if (operatorIndex === 0) {
      answer = (firstTerm + secondTerm).toString();
    } else if (operatorIndex === 1) {
      answer = (firstTerm - secondTerm).toString();
    }

    result.push([question, answer]);
  }

  return result;
};

const calc = () => {
  game('What is the result of the expression?', getCalc());
};

export default calc;
