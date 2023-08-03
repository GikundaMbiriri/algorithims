function moveZeroes(nums) {
    var snowBallSize = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            snowBallSize++;
        }
        else if (snowBallSize > 0) {
            var t = nums[i];
            nums[i] = 0;
            nums[i - snowBallSize] = t;
        }
    }
}
