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

export default gcdGame;
