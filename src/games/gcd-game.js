import { randomFloor } from '../utils.js';

import gameEngine from '../index.js';

const questionText = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const randomNum1 = randomFloor(100);
  const randomNum2 = randomFloor(100);
  const questionValue = `${randomNum1} ${randomNum2}`;
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const answer = gcd(randomNum1, randomNum2).toString();
  return [questionValue, answer];
};

export default () => gameEngine(gameData, questionText);
