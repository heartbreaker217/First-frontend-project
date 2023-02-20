import getAnswer from '../index.js';
import { getRandomInt, makeIntro } from '../utils.js';

const isEven = () => {
  const randomNumber = getRandomInt(0, 100);
  console.log(`Question: ${randomNumber}`);
  if (randomNumber % 2 === 0) {
    return true;
  }

  return false;
};

const even = () => {
  const username = makeIntro('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3;) {
    let correctAnswer = 'no';

    if (isEven()) {
      correctAnswer = 'yes';
    }

    const userAnswer = getAnswer();
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
