import readlineSync from 'readline-sync';

let userName;

const greeting = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const evenGame = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const isEven = randomNum % 2 === 0;
  const userAnswer = readlineSync.question(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${randomNum}\nYour answer: `);
  if (userAnswer === 'yes') {
    if (isEven) {
      console.log('Correct!');
    } else {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
      return false;
    }
  } else if (userAnswer === 'no') {
    if (!isEven) {
      console.log('Correct!');
    } else {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
      return false;
    }
  } else if (isEven) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
    return false;
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
    return false;
  }
  return true;
};

const calcGame = () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const operandArr = ['+', '-', '*'];
  const operandNumber = Math.floor(Math.random() * (operandArr.length));
  const randomOperand = operandArr[operandNumber];
  let answer;
  switch (operandNumber) {
    case 0:
      answer = randomNum1 + randomNum2;
      break;
    case 1:
      answer = randomNum1 - randomNum2;
      break;
    default:
      answer = randomNum1 * randomNum2;
  }
  const userAnswer = readlineSync.questionInt(`What is the result of the expression?\nQuestion: ${randomNum1} ${randomOperand} ${randomNum2}\nYour answer: `);
  if (userAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!`);
    return false;
  }
  return true;
};

const gcdGame = () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const answer = gcd(randomNum1, randomNum2);
  const userAnswer = readlineSync.questionInt(`Find the greatest common divisor of given numbers.\nQuestion: ${randomNum1} ${randomNum2}\nYour answer: `);
  if (userAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${userName}!`);
    return false;
  }
  return true;
};

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

const primeGame = () => {
  const randomNum = Math.floor(Math.random() * 1000);
  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  const userAnswer = readlineSync.question(`Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${randomNum}\nYour answer: `);
  if (userAnswer === 'yes') {
    if (isPrime(randomNum)) {
      console.log('Correct!');
    } else {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
      return false;
    }
  } else if (userAnswer === 'no') {
    if (!isPrime(randomNum)) {
      console.log('Correct!');
    } else {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
      return false;
    }
  } else if (isPrime(randomNum)) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${userName}!`);
    return false;
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${userName}!`);
    return false;
  }
  return true;
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
  greeting, evenGame, calcGame, gcdGame, progressionGame, primeGame, game,
};
