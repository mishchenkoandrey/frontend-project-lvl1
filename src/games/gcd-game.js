import getRandom from '../utils.js';

import runGameEngine from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getGameData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2).toString();
  return [question, answer];
};

export default () => runGameEngine(getGameData, task);
