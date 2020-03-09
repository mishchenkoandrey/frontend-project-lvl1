const questionText = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const randomNum = Math.floor(Math.random() * 1000);
  const questionValue = `${randomNum}`;
  const isPrime = (number) => {
    if (number < 2) {
      return 'no';
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  const answer = isPrime(randomNum);
  return [questionValue, answer];
};

export { questionText };
