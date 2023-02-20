import getAnswer from '../index.js';
import { getRandomInt, makeIntro } from '../utils.js';

const isPrime = () => {
  const number = getRandomInt(0, 100);
  console.log(`Question: ${number}`);
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }
    divider += 1;
  }

  return true;
};

const prime = () => {
  const username = makeIntro('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3;) {
    let correctAnswer = 'no';

    if (isPrime()) {
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

export default prime;
