import getRandom from '../utils.js';

import runGameEngine from '../index.js';

const task = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
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

const operators = ['+', '-', '*'];

const operatorMaxNum = operators.length - 1;

const getGameData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const operatorIndex = getRandom(0, operatorMaxNum);
  const operator = operators[operatorIndex];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator).toString();
  return [question, answer];
};

export default () => runGameEngine(getGameData, task);
