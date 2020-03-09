const questionText = () => 'What is the result of the expression?';

export default () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const operandArr = ['+', '-', '*'];
  const operandNumber = Math.floor(Math.random() * (operandArr.length));
  const randomOperand = operandArr[operandNumber];
  const questionValue = `${randomNum1} ${randomOperand} ${randomNum2}`;
  let answer;
  switch (operandNumber) {
    case 0:
      answer = (randomNum1 + randomNum2).toString();
      break;
    case 1:
      answer = (randomNum1 - randomNum2).toString();
      break;
    default:
      answer = (randomNum1 * randomNum2).toString();
  }
  return [questionValue, answer];
};

export { questionText };
