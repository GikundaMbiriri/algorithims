"use strict";
exports.__esModule = true;
function majorityElement(nums) {
    var count = 0;
    var candidate = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (count === 0) {
            candidate = num;
        }
        if (num === candidate) {
            count++;
        }
        else {
            count--;
        }
    }
    // Now, 'candidate' contains the potential majority element.
    // Check if it appears more than n/2 times to ensure it's the majority element.
    count = 0;
    for (var _a = 0, nums_2 = nums; _a < nums_2.length; _a++) {
        var num = nums_2[_a];
        if (num === candidate) {
            count++;
        }
    }
    return count > nums.length / 2 ? candidate : null;
}
