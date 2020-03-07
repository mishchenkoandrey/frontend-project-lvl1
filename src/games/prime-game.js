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

export default primeGame;
