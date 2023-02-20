/* eslint-disable no-param-reassign */
import greeting from './cli.js';

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
};

export const makeIntro = (rules) => {
  const username = greeting();
  console.log(rules);
  return username;
};
