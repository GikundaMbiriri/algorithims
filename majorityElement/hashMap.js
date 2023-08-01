"use strict";
exports.__esModule = true;
function majorityElement(nums) {
    var n = nums.length;
    var occurrences = new Map();
    for (var i = 0; i < n; i++) {
        var num = nums[i];
        occurrences.set(num, (occurrences.get(num) || 0) + 1);
    }
    var threshold = n / 2;
    for (var _i = 0, _a = occurrences.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (value > threshold) {
            return key;
        }
    }
    return null; // No majority element found
}
