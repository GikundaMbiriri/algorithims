"use strict";
exports.__esModule = true;
function containsDuplicate(nums) {
    var numbersObject = {};
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var i = nums_1[_i];
        if (numbersObject[i]) {
            return true;
        }
        else {
            numbersObject[i] = 1;
        }
    }
    return false;
}
