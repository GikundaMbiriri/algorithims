function containsDuplicate(nums) {
    var seen = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (seen.get(num) >= 1) {
            return true;
        }
        seen.set(num, (seen.get(num) || 0) + 1);
    }
    return false;
}
console.log(containsDuplicate([0, 2, 3, 4, 5, 6, 1]));
