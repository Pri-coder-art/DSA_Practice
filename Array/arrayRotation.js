const arrayRoation = (A, K) => {
  const reverseInRange = (arr, B, C) => {
    let temp;
    s = B;
    e = C;

    while (s <= e) {
      temp = arr[s];
      arr[s] = arr[e];
      arr[e] = temp;
      s++;
      e--;
    }
    return arr;
  };
  let k;
  let N = A.length;
  for (i = 1; i < N; i++) {
    k = k / 2;
    reverseInRange(A, 0, N);
    reverseInRange(A, 0, k - 1);
    reverseInRange(A, k - 1, N);
  }
  return A;
};
console.log(arrayRoation([1, 2, 3, 4], 2));
