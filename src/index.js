const getRandom = (max) => {
  const random = Math.floor(Math.random() * max);
  return random;
};

const rules = (str) => {
  console.log(str);
};

export { getRandom, rules };
