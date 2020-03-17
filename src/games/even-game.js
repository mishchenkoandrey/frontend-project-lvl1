import getRandom from '../utils.js';

import runGameEngine from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const num = getRandom(0, 100);
  const question = num.toString();
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGameEngine(getGameData, task);
