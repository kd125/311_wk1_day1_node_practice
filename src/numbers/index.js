const isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  }
};

const sum = (arr) => {
  let sumNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    sumNumbers += arr[i];
  }
  return sumNumbers;
};

const comboSum = (arr, sum) => {
  let arrayTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    arrayTotal += arr[i];
  }
  if (arrayTotal == sum) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  isEven,
  sum,
  comboSum,
};
