import readlineSync from 'readline-sync';
import greeting from './cli.js';
import getRandomInt from './utils.js';

export const rounds = 3;

const makeIntro = (rules) => {
  const username = greeting();
  console.log(rules);
  return username;
};

export const gamesLoop = (gameLogic) => {
  const result = [];
  for (let i = 0; i < rounds; i += 1) {
    const gameRound = gameLogic();
    result.push(gameRound);
  }

  return result;
};

export const generateRound = (isIt) => {
  const randomNumber = getRandomInt(0, 100);
  const question = `Question: ${randomNumber}`;

  const answer = isIt(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

export const game = (rules, result) => {
  const username = makeIntro(rules);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = result[i];
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};
