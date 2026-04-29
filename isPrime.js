let p = 5;
let result = -1;
for (i = 2; i <= Math.sqrt(p); i++) {
  if (p % i == 0) {
    result = 0;
    break;
  }
}
if (result != 0) {
  result = 1;
}

console.log(result);
// function factor(P) {
//   let c = 0;
//   for (i = 0; i < Math.sqrt(p); i++) {
//     if (p % i == 0) {
//       if (i == p / i) {
//         c += 1;
//       } else {
//         c += 2;
//       }
//     }
//   }
// }
