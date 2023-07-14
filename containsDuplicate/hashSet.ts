function containsDuplicate(nums: number[]): boolean {
  const seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
console.log(containsDuplicate([0, 2, 3, 4, 5, 6, 0]));
export {};
