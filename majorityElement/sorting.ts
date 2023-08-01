function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  const n: number = nums.length;
  return nums[Math.floor(n / 2)];
}
