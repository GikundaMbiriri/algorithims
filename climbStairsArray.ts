function climbStairs(n: number): number {
  if (n == 0 || n == 1) {
    return 1;
  }
  const stairsArray = new Array(n + 1).fill(0);
  stairsArray[0] = stairsArray[1] = 1;
  for (let i = 2; i <= n; i++) {
    stairsArray[i] = stairsArray[i - 1] + stairsArray[i - 2];
  }
  return stairsArray[n];
}
