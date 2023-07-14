"use strict";
exports.__esModule = true;
function containsDuplicate(nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var k = i + 1; k < nums.length; k++) {
            if (nums[i] == nums[k]) {
                return true;
            }
        }
    }
    return false;
}
console.log(containsDuplicate([0, 1, 4, 3, 2, 0, 9]));
