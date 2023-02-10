/* eslint-disable indent */
import readlineSync from 'readline-sync';
import greeting from './cli.js';

const isEven = () => {
  // Запрашиваем имя пользователя
  const username = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3;) {
  // Задаем случайное число от 0 до 100
  const random = Math.floor(Math.random() * 101);
  // Формируем вопрос и правильный ответ
  console.log(`Question: ${random}`);
  let correctAnswer;
  if (random % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  // Запрашиваем ответ у пользователя
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
