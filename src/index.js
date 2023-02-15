/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';
import greeting from './cli.js';

// Функция, возвращающая случайное число в промежутке [0, max)
const getRandom = (max) => {
  const random = Math.floor(Math.random() * max);
  return random;
};

// Функция, которая выводит на экран правила игры и запрашивает имя пользователя
const intro = (rules) => {
  const username = greeting();
  console.log(rules);
  return username;
};

// Функция, запрашивающая ответ пользователя
const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

// Функция, возвращающая НОД двух случайный чисел из промежутка [0, 100]
const getGCD = () => {
  let a = getRandom(101);
  let b = getRandom(101);
  console.log(`Question: ${a} ${b}`);

  while (a !== 0 && b !== 0) {
    if (a === b) {
      return a;
    } if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const correctAnswer = a + b;

  return correctAnswer.toString();
};

// Функция, выполняющая операции "+, - и *" с двумя случайными числами в промежутке [0, 100]
const getCalc = () => {
  const random1 = getRandom(101);
  const random2 = getRandom(101);
  const operatorIndex = getRandom(3);
  let operator = '';
  if (operatorIndex === 0) {
    operator = '+';
  } else if (operatorIndex === 1) {
    operator = '-';
  } else {
    operator = '*';
  }
  console.log(`Question: ${random1} ${operator} ${random2}`);
  let correctAnswer;
  if (operatorIndex === 0) {
    correctAnswer = (random1 + random2).toString();
  } else if (operatorIndex === 1) {
    correctAnswer = (random1 - random2).toString();
  } else {
    correctAnswer = (random1 * random2).toString();
  }

  return correctAnswer;
};

// Функция, определяющая четность случайного числа из промежутка [0, 100]
const isEven = () => {
  const random = getRandom(101);
  console.log(`Question: ${random}`);
  let correctAnswer;
  if (random % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return correctAnswer;
};

export {
  getRandom, intro, getGCD, getCalc, isEven, getAnswer,
};
