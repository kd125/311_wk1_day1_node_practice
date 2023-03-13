const isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  }
};

let myArray = [4, 2, 2, 9, 1];

const sum = (arr) => {
  let sumNumbers;
  for (let i = 0; i < arr.length; i++) {
    sumNumbers + arr[i];
    console.log("Current value is: " + arr[i]);
  }
  console.log(sumNumbers);
};

sum(myArray);

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
};

module.exports = {
  isEven,
  sum,
  comboSum,
};
