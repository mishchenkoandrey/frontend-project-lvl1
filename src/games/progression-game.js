const progressionGame = () => {
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
    answer = progressionArr[randomPos];
    progressionArr[randomPos] = '..';
    return progressionArr.join(' ');
  };
  const userAnswer = readlineSync.questionInt(`What number is missing in the progression?\nQuestion: ${progressionArrGeneration()}\nYour answer: `);
  if (userAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!`);
    return false;
  }
  return true;
};

export default progressionGame;
