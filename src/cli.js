import readlineSync from 'readline-sync';

const greeting = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

export default greeting;
