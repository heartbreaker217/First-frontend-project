import { arithmeticProgression, intro, getAnswer } from '../index.js';

const progression = () => {
  // Приветствие (сохраняем имя пользователя)
  const username = intro('What number is missing in the progression?');
  // Общий цикл для всех игр
  for (let i = 0; i < 3;) {
  // Формируем вопрос и правильный ответ
    const correctAnswer = arithmeticProgression();
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

export default progression;
