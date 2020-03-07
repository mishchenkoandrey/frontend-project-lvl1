import readlineSync from 'readline-sync';

let userName;

const greeting = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const game = (gameName) => {
  for (let i = 0; i < 3; i += 1) {
    if (!gameName()) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export {
  greeting, game,
};
