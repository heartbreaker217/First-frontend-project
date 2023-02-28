import getRandomInt from '../utils.js';
import { game, rounds } from '../index.js';

const getProgression = (firstOfProgression, progressionStep, progressionLength) => {
  const progressionArray = [firstOfProgression];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progressionArray.push(progressionArray[i] + progressionStep);
  }

  return progressionArray;
};

const generateProgression = () => {
  const length = getRandomInt(5, 10);
  const step = getRandomInt(1, 10);
  const firstElement = getRandomInt(0, 100);
  const progression = getProgression(firstElement, step, length);

  const indexOfAnswer = getRandomInt(0, progression.length - 1);
  const randomElement = progression[indexOfAnswer];
  const answer = randomElement.toString();
  progression[indexOfAnswer] = '..';
  const question = `${progression.join(' ')}`;

  return [question, answer];
};

const loopForProgression = () => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    result.push(generateProgression());
  }

  return result;
};

const progression = () => {
  game('What number is missing in the progression?', loopForProgression());
};

export default progression;
