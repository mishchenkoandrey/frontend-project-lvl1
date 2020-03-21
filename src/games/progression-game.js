import getRandom from '../utils.js';

import runGameEngine from '../index.js';

const task = 'What number is missing in the progression?';

const getGameData = () => {
  const num1 = getRandom(0, 10);
  const diff = getRandom(1, 10);
  const pos = getRandom(0, 9);
  const progression = [num1];
  let progressionItem = num1;
  for (let i = 1; i < 10; i += 1) {
    progressionItem += diff;
    progression.push(progressionItem);
  }
  const answer = progression[pos].toString();
  progression[pos] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => runGameEngine(getGameData, task);
