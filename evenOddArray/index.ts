function oddEven(a: number, b: number): boolean {
  return (a & 1) !== (b & 1);
}

function longestAlternatingSubarray(A: number[], K: number): number {
  let cnt: number = 0;
  let res: number = 0;
  for (let i = 0; i < A.length; ++i) {
    if (i > 0 && oddEven(A[i], A[i - 1]) && Math.max(A[i], A[i - 1]) <= K) {
      cnt++;
    } else {
      cnt = A[i] % 2 === 0 && A[i] <= K ? 1 : 0;
    }
    res = Math.max(res, cnt);
  }
  return res;
}
