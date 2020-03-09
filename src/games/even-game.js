const questionText = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const randomNum = Math.floor(Math.random() * 100);
  const questionValue = `${randomNum}`;
  const answer = randomNum % 2 === 0 ? 'yes' : 'no';
  return [questionValue, answer];
};

export { questionText };
