/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default getAnswer;
