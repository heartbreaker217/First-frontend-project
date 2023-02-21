import game from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }

  return false;
};

const gameEven = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt(0, 100);
    const question = `Question: ${randomNumber}`;

    let answer = 'no';
    if (isEven(randomNumber)) {
      answer = 'yes';
    }

    result.push([question, answer]);
  }

  return result;
};

const even = () => {
  game('Answer "yes" if the number is even, otherwise answer "no"', gameEven());
};

export default even;
