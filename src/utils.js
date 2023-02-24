const getRandomInt = (min, max) => {
  const bottom = Math.ceil(min);
  const top = Math.floor(max);
  const randomInt = Math.floor(Math.random() * (top - bottom + 1)) + bottom;
  return randomInt;
};

export default getRandomInt;
