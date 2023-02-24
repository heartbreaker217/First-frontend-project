import getRandomInt from '../utils.js';
import { game, gamesLoop } from '../index.js';

const getProgression = () => {
  const progressionLength = getRandomInt(5, 10);
  const progressionStep = getRandomInt(1, 10);
  const firstOfProgression = getRandomInt(0, 100);
  const progressionArray = [firstOfProgression];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progressionArray.push(progressionArray[i] + progressionStep);
  }

  return progressionArray;
};

const generateProgression = () => {
  const progression = getProgression();

  const randomElement = progression[getRandomInt(0, progression.length - 1)];
  const answer = randomElement.toString();

  for (let i = 0; i < progression.length; i += 1) {
    if (progression[i] === randomElement) {
      progression[i] = '..';
      break;
    }
  }

  const question = `Question: ${progression.join(' ')}`;

  return [question, answer];
};

const progression = () => {
  game('What number is missing in the progression?', gamesLoop(generateProgression));
};

export default progression;
