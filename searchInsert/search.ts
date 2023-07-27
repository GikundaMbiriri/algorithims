function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  if (target > nums[high]) {
    return high + 1;
  }

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}
