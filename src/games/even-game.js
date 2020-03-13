import { randomFloor, booleanToString } from '../utils.js';

import gameEngine from '../index.js';

const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const gameData = () => {
  const randomNum = randomFloor(100);
  const questionValue = `${randomNum}`;
  const answer = booleanToString(isEven, randomNum);
  return [questionValue, answer];
};

export default () => gameEngine(gameData, questionText);
