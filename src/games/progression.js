import getRandomInt from '../utils.js';
import { game, roundsQuantity } from '../index.js';

const getProgression = (firstOfProgression, progressionStep, progressionLength) => {
  const progressionArray = [firstOfProgression];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progressionArray.push(progressionArray[i] + progressionStep);
  }

  return progressionArray;
};

const generateRound = () => {
  const length = getRandomInt(5, 10);
  const step = getRandomInt(1, 10);
  const firstElement = getRandomInt(0, 100);
  const progression = getProgression(firstElement, step, length);

  const indexOfAnswer = getRandomInt(0, progression.length - 1);
  const answer = (progression[indexOfAnswer]).toString();
  progression[indexOfAnswer] = '..';
  const question = `${progression.join(' ')}`;

  return [question, answer];
};

const runGameProgression = () => {
  const result = [];
  for (let i = 0; i < roundsQuantity; i += 1) {
    result.push(generateRound());
  }

  game('What number is missing in the progression?', result);
};

export default runGameProgression;
