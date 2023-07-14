function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] == nums[k]) {
        return true;
      }
    }
  }

  return false;
}
console.log(containsDuplicate([0, 1, 4, 3, 2, 0, 9]));
export {};
