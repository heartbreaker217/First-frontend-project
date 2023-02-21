import game from '../index.js';
import getRandomInt from '../utils.js';

const getProgression = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const progressionLength = getRandomInt(5, 10);
    const firstOfProgression = getRandomInt(0, 100);
    const progressionStep = getRandomInt(1, 10);
    const progressionArray = [firstOfProgression];

    for (let k = 0; k < progressionLength - 1; k += 1) {
      progressionArray.push(progressionArray[k] + progressionStep);
    }

    const answer = progressionArray[getRandomInt(0, progressionLength - 1)];

    for (let j = 0; j < progressionLength; j += 1) {
      if (progressionArray[j] === answer) {
        progressionArray[j] = '..';
        break;
      }
    }

    const question = `Question: ${progressionArray.join(' ')}`;

    result.push([question, answer.toString()]);
  }

  return result;
};

const progression = () => {
  game('What number is missing in the progression?', getProgression());
};

export default progression;
