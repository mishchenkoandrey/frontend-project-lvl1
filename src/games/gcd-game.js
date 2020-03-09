const questionText = () => 'Find the greatest common divisor of given numbers.';

export default () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const questionValue = `${randomNum1} ${randomNum2}`;
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const answer = gcd(randomNum1, randomNum2).toString();
  return [questionValue, answer];
};

export { questionText };
