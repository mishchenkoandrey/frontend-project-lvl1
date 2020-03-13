import readlineSync from 'readline-sync';

export default (gameData, questionText) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(questionText);
  for (let i = 0; i < 3; i += 1) {
    const gameDataArr = gameData();
    const userAnswer = readlineSync.question(`Question: ${gameDataArr[0]}\nYour answer: `);
    if (userAnswer === gameDataArr[1]) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${gameDataArr[1]}.\nLet's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};
