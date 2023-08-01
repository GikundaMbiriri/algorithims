function majorityElement(nums: number[]): number | null {
  const n: number = nums.length;
  const occurrences: Map<number, number> = new Map();

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    occurrences.set(num, (occurrences.get(num) || 0) + 1);
  }

  const threshold: number = n / 2;
  for (const [key, value] of occurrences.entries()) {
    if (value > threshold) {
      return key;
    }
  }

  return null; // No majority element found
}

export {};
