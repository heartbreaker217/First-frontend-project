import getAnswer from '../index.js';
import { getRandomInt, makeIntro } from '../utils.js';

const getProgression = () => {
  const progressionLength = getRandomInt(5, 10);
  const firstOfProgression = getRandomInt(0, 100);
  const progressionStep = getRandomInt(1, 10);
  const progressionArray = [firstOfProgression];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progressionArray.push(progressionArray[i] + progressionStep);
  }

  const correctAnswer = progressionArray[getRandomInt(0, progressionLength - 1)];

  for (let j = 0; j < progressionLength; j += 1) {
    if (progressionArray[j] === correctAnswer) {
      progressionArray[j] = '..';
      break;
    }
  }
  console.log(`Question: ${progressionArray.join(' ')}`);

  return correctAnswer.toString();
};

const progression = () => {
  const username = makeIntro('What number is missing in the progression?');
  for (let i = 0; i < 3;) {
    const correctAnswer = getProgression();
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

export default progression;
