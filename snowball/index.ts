function moveZeroes(nums: number[]): void {
  let snowBallSize: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      snowBallSize++;
    } else if (snowBallSize > 0) {
      const t: number = nums[i];
      nums[i] = 0;
      nums[i - snowBallSize] = t;
    }
  }
}
export {};
