import { isEven, makeIntro, getAnswer } from '../index.js';

const even = () => {
  // Приветствие (сохраняем имя пользователя)
  const username = makeIntro('Answer "yes" if the number is even, otherwise answer "no"');
  // Общий цикл для всех игр
  for (let i = 0; i < 3;) {
  // Формируем вопрос и правильный ответ
    const correctAnswer = isEven();
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

export default even;
