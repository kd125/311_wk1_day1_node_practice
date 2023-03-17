const split = (str, delim) => {
  let newString = str.split(delim);
  return newString;
};

const pairs = (str) => {
  let pairedString = str.match(/.{2}/g);
  return pairedString;
};

const reverse = (str) => {
  let reversedString = str.split("").reverse().join("");
  return reversedString;
};

module.exports = {
  split,
  pairs,
  reverse,
};
