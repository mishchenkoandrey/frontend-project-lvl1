import readlineSync from 'readline-sync';

let userName;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const question = (questionText) => {
  console.log(questionText());
};

const game = (gameName) => {
  for (let i = 0; i < 3; i += 1) {
    const gameData = gameName();
    const userAnswer = readlineSync.question(`Question: ${gameData[0]}\nYour answer: `);
    if (userAnswer === gameData[1]) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${gameData[1]}.\nLet's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export {
  greeting, question, game,
};
