import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { getRandom, rules } from '../index.js';

const calc = () => {
  // Приветствие (сохраняем имя пользователя)
  const username = greeting();
  // Правила КОНКРЕТНОЙ игры
  rules('What is the result of the expression?');
  // Общий цикл для всех игр
  for (let i = 0; i < 3;) {
  // Формируем вопрос и правильный ответ
    const random1 = getRandom(100);
    const random2 = getRandom(100);
    const operatorIndex = getRandom(3);
    let operator = '';
    if (operatorIndex === 0) {
      operator = '+';
    } else if (operatorIndex === 1) {
      operator = '-';
    } else {
      operator = '*';
    }
    console.log(`Question: ${random1} ${operator} ${random2}`);
    let correctAnswer;
    if (operatorIndex === 0) {
      correctAnswer = random1 + random2;
    } else if (operatorIndex === 1) {
      correctAnswer = random1 - random2;
    } else {
      correctAnswer = random1 * random2;
    }
    // Ответ пользователя (сохраняем)
    const userAnswer = readlineSync.questionInt('Your answer: ');
    // Проверяем правильность ответа
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
