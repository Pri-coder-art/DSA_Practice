const countOfPrime = (p) => {
  let c = 0;
  for (i = 2; i <= p; i++) {
    if (p % i != 0) {
      c++;
    }
  }
  return c;
};
console.log(countOfPrime(5));
