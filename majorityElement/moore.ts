function majorityElement(nums: number[]): number | null {
  let count: number = 0;
  let candidate: number = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Now, 'candidate' contains the potential majority element.
  // Check if it appears more than n/2 times to ensure it's the majority element.
  count = 0;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  return count > nums.length / 2 ? candidate : null;
}
export {};
