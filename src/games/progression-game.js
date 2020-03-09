const questionText = () => 'What number is missing in the progression?';

export default () => {
  let answer;
  const progressionArrGeneration = () => {
    const randomNum1 = Math.floor(Math.random() * 10);
    const randomDiff = Math.ceil(Math.random() * 10);
    const randomPos = Math.floor(Math.random() * 10);
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

export { questionText };
