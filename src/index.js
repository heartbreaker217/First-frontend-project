/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';
import greeting from './cli.js';

// Функция, возвращающая случайное число в промежутке [0, max)
export const getRandom = (max) => {
  const random = Math.floor(Math.random() * max);
  return random;
};

// Функция, возвращающая случайное число в промежутке [min, max]
export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
};

// Функция, которая выводит на экран правила игры и запрашивает имя пользователя
export const makeIntro = (rules) => {
  const username = greeting();
  console.log(rules);
  return username;
};

// Функция, запрашивающая ответ пользователя
export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

// Функция, определяющая простоту случайного числа из промежутка [0, 100]
export const isPrime = () => {
  const number = getRandom(101);
  console.log(`Question: ${number}`);
  if (number < 2) {
    const correctAnswer = 'no';
    return correctAnswer;
  }
  let divider = 2;
  while (divider <= number / 2) {
    if (number % divider === 0) {
      const correctAnswer = 'no';
      return correctAnswer;
    }
    divider += 1;
  }

  const correctAnswer = 'yes';
  return correctAnswer;
};

// Функция, возвращающая арифметическую прогрессию от 5 до 10 чисел с одним пропущенным числом
export const getProgression = () => {
  const progressionLength = getRandomInt(5, 10);
  const firstOfProgression = getRandom(101);
  const progressionStep = getRandomInt(1, 10);
  const progressionArray = [firstOfProgression];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progressionArray.push(progressionArray[i] + progressionStep);
  }

  const correctAnswer = progressionArray[getRandom(progressionLength)];

  for (let j = 0; j < progressionLength; j += 1) {
    if (progressionArray[j] === correctAnswer) {
      progressionArray[j] = '..';
      break;
    }
  }
  console.log(`Question: ${progressionArray.join(' ')}`);

  return correctAnswer.toString();
};

// Функция, возвращающая НОД двух случайный чисел из промежутка [0, 100]
export const getGCD = () => {
  const max = 101;
  let firstNumber = getRandom(max);
  let secondNumber = getRandom(max);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  if (firstNumber === secondNumber) {
    return firstNumber;
  }

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }

  return (firstNumber + secondNumber).toString();
};

// Функция, выполняющая операции "+, - и *" с двумя случайными числами в промежутке [0, 100]
export const getCalc = () => {
  const max = 101;
  const firstTerm = getRandom(max);
  const secondTerm = getRandom(max);
  const operatorsQuantity = 3;
  const operatorIndex = getRandom(operatorsQuantity);
  let operator = '*';
  if (operatorIndex === 0) {
    operator = '+';
  } else if (operatorIndex === 1) {
    operator = '-';
  }

  console.log(`Question: ${firstTerm} ${operator} ${secondTerm}`);
  let correctAnswer = (firstTerm * secondTerm).toString();
  if (operatorIndex === 0) {
    correctAnswer = (firstTerm + secondTerm).toString();
  } else if (operatorIndex === 1) {
    correctAnswer = (firstTerm - secondTerm).toString();
  }

  return correctAnswer;
};

// Функция, определяющая четность случайного числа из промежутка [0, 100]
export const isEven = () => {
  const randomNumber = getRandom(101);
  console.log(`Question: ${randomNumber}`);
  let correctAnswer = 'no';
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  }

  return correctAnswer;
};
