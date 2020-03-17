import getRandom from '../utils.js';

import runGameEngine from '../index.js';

const task = 'What number is missing in the progression?';

const getGameData = () => {
  const num1 = getRandom(0, 10);
  const diff = getRandom(1, 10);
  const pos = getRandom(0, 9);
  const progressionArr = [num1];
  let arrItem = num1;
  for (let i = 1; i < 10; i += 1) {
    arrItem += diff;
    progressionArr.push(arrItem);
  }
  const answer = progressionArr[pos].toString();
  progressionArr[pos] = '..';
  const question = progressionArr.join(' ');
  return [question, answer];
};

export default () => runGameEngine(getGameData, task);
