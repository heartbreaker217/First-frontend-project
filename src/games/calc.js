import { getCalc, makeIntro, getAnswer } from '../index.js';

const calc = () => {
  // Приветствие (сохраняем имя пользователя)
  const username = makeIntro('What is the result of the expression?');
  // Общий цикл для всех игр
  for (let i = 0; i < 3;) {
  // Формируем вопрос и правильный ответ
    const correctAnswer = getCalc();
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

export default calc;
