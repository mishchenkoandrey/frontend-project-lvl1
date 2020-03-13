const randomFloor = (multiplier = 1) => Math.floor(Math.random() * multiplier);
const randomCeil = (multiplier = 1) => Math.ceil(Math.random() * multiplier);
const booleanToString = (predicateFunc, predicateArg) => (predicateFunc(predicateArg) ? 'yes' : 'no');

export { randomFloor, randomCeil, booleanToString };
