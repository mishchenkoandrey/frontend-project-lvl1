import getRandom from '../utils.js';

import runGameEngine from '../index.js';

const progressionLength = 10;

const getProgression = (first, diff, length) => {
  const progression = [];
  for (let index = 0; index < length; index += 1) {
    const member = first + index * diff;
    progression.push(member);
  }
  return progression;
};

const task = 'What number is missing in the progression?';

const getGameData = () => {
  const first = getRandom(0, 10);
  const diff = getRandom(1, 10);
  const hiddenMemberIndex = getRandom(0, progressionLength - 1);
  const progression = getProgression(first, diff, progressionLength);
  const answer = progression[hiddenMemberIndex].toString();
  progression[hiddenMemberIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => runGameEngine(getGameData, task);
