let A = 12;
let c = 0;
for (i = 0; i <= Math.sqrt(A); i++) {
  if (A % i == 0) {
    if (i == A / i) {
      c += 1;
    } else {
      c += 2;
    }
  }
}
console.log(c);
