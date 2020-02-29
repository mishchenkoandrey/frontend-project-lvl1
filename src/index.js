import readlineSync from 'readline-sync';

let userName;

const greeting = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const isEvenGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 100);
    const isEven = randomNum % 2 === 0;
    const userAnswer = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNum}\nYour answer: `);
    if (userAnswer === 'yes') {
      if (isEven) {
        console.log('Correct!');
      } else {
        console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
        return;
      }
    } else if (userAnswer === 'no') {
      if (!isEven) {
        console.log('Correct!');
      } else {
        console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
        return;
      }
    } else if (isEven) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
      return;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { greeting, isEvenGame };
