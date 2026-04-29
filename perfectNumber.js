const perfectNumber = (num) => {
  sum = 0;
  for (i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  if (sum === num) {
    return 1;
  } else {
    return 0;
  }
};
console.log(perfectNumber(4));
