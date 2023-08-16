function maxArea(height) {
    var left = 0;
    var right = height.length - 1;
    var maxArea = 0;
    while (left < right) {
        var currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxArea;
}
