import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { getRandom, rules } from '../index.js';

const isEven = () => {
  // Приветствие (сохраняем имя пользователя)
  const username = greeting();
  // Правила КОНКРЕТНОЙ игры
  rules('Answer "yes" if the number is even, otherwise answer "no"');
  // Общий цикл для всех игр
  for (let i = 0; i < 3;) {
  // Формируем вопрос и правильный ответ
    const random = getRandom(100);
    console.log(`Question: ${random}`);
    let correctAnswer;
    if (random % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    // Ответ пользователя (сохраняем)
    const userAnswer = readlineSync.question('Your answer: ');
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

export default isEven;
