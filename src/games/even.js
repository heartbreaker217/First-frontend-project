import { game, gamesLoop, generateRound } from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }

  return false;
};

const generateEven = () => {
  const result = generateRound(isEven);
  return result;
};

const even = () => {
  game('Answer "yes" if the number is even, otherwise answer "no"', gamesLoop(generateEven));
};

export default even;
