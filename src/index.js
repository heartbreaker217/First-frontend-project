import readlineSync from 'readline-sync';
import greeting from './cli.js';

export const rounds = 3;

export const game = (rules, result) => {
  const username = greeting();
  console.log(rules);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = result[i];
    console.log(`Question: ${question}`);
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
