import { randomFloor, booleanToString } from '../utils.js';

import gameEngine from '../index.js';

const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameData = () => {
  const randomNum = randomFloor(1000);
  const questionValue = `${randomNum}`;
  const answer = booleanToString(isPrime, randomNum);
  return [questionValue, answer];
};

export default () => gameEngine(gameData, questionText);
