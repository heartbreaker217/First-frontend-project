/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';
import greeting from './cli.js';

const makeIntro = (rules) => {
  const username = greeting();
  console.log(rules);
  return username;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const game = (rules, result) => {
  const username = makeIntro(rules);
  for (let i = 0; i < 3; i += 1) {
    console.log(result[i][0]);
    const correctAnswer = result[i][1];
    const userAnswer = getAnswer();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default game;
