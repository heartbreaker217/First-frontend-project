import { isPrime, intro, getAnswer } from '../index.js';

const prime = () => {
  // Приветствие (сохраняем имя пользователя)
  const username = intro('Answer "yes" if given number is prime. Otherwise answer "no".');
  // Общий цикл для всех игр
  for (let i = 0; i < 3;) {
  // Формируем вопрос и правильный ответ
    const correctAnswer = isPrime();
    // Ответ пользователя (сохраняем)
    const userAnswer = getAnswer();
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

export default prime;
