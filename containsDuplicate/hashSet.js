"use strict";
exports.__esModule = true;
function containsDuplicate(nums) {
    var seen = new Set();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
console.log(containsDuplicate([0, 2, 3, 4, 5, 6, 1]));
