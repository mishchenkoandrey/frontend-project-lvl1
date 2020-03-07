export default () => {
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
