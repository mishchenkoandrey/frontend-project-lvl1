import getRandom from '../utils.js';

import runGameEngine from '../index.js';

const task = 'What is the result of the expression?';

const getAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getGameData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const operatorArr = ['+', '-', '*', '/'];
  const operatorNumber = getRandom(0, 3);
  const operator = operatorArr[operatorNumber];
  const question = `${num1} ${operator} ${num2}`;
  const answer = getAnswer(num1, num2, operator).toString();
  return [question, answer];
};

export default () => runGameEngine(getGameData, task);
