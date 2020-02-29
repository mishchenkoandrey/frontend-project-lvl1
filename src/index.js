import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const isEvenGame = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const isEven = randomNum % 2 === 0;
  const userAnswer = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNum}`);
  console.log(`Your answer: ${userAnswer}`);
  if (userAnswer === 'yes') {
    if (isEven) {
      console.log('Correct!');
    } else {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
    }
  }
};

export { greeting, isEvenGame };
