import { randomFloor } from '../utils.js';

import gameEngine from '../index.js';

const questionText = 'What is the result of the expression?';

const calc = (num1, num2, operator) => {
  let answer;
  switch (operator) {
    case '+':
      answer = (num1 + num2).toString();
      break;
    case '-':
      answer = (num1 - num2).toString();
      break;
    default:
      answer = (num1 * num2).toString();
  }
  return answer;
};

const gameData = () => {
  const randomNum1 = randomFloor(100);
  const randomNum2 = randomFloor(100);
  const operatorArr = ['+', '-', '*'];
  const operatorNumber = randomFloor(operatorArr.length);
  const randomOperator = operatorArr[operatorNumber];
  const questionValue = `${randomNum1} ${randomOperator} ${randomNum2}`;
  const answer = calc(randomNum1, randomNum2, randomOperator);
  return [questionValue, answer];
};

export default () => gameEngine(gameData, questionText);
