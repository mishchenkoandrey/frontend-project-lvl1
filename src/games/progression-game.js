import { randomFloor, randomCeil } from '../utils.js';

import gameEngine from '../index.js';

const questionText = 'What number is missing in the progression?';

const gameData = () => {
  let answer;
  const progressionArrGeneration = () => {
    const randomNum1 = randomFloor(10);
    const randomDiff = randomCeil(10);
    const randomPos = randomFloor(10);
    const progressionArr = [randomNum1];
    let arrItem = randomNum1;
    for (let i = 1; i < 10; i += 1) {
      arrItem += randomDiff;
      progressionArr.push(arrItem);
    }
    answer = progressionArr[randomPos].toString();
    progressionArr[randomPos] = '..';
    return progressionArr.join(' ');
  };
  const questionValue = progressionArrGeneration();
  return [questionValue, answer];
};

export default () => gameEngine(gameData, questionText);
