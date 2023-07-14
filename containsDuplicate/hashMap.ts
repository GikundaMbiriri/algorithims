function containsDuplicate(nums: number[]): boolean {
  const seen = new Map();
  for (let num of nums) {
    if (seen.get(num) >= 1) {
      return true;
    }
    seen.set(num, (seen.get(num) || 0) + 1);
  }
  return false;
}
console.log(containsDuplicate([0, 2, 3, 4, 5, 6, 1]));
