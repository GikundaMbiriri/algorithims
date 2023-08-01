function majorityElement(nums) {
    nums.sort(function (a, b) { return a - b; }); // Sort the array in ascending order
    var n = nums.length;
    return nums[Math.floor(n / 2)];
}
