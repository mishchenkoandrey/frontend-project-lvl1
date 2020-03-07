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

export default calcGame;
