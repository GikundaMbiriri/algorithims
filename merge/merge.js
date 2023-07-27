/**
 * Merge two sorted arrays nums1 and nums2 into the first array nums1.
 * @param nums1 The array with extra space to hold the merged result.
 * @param m The number of elements in nums1.
 * @param nums2 The array with n elements.
 * @param n The number of elements in nums2.
 */
var merge = function (nums1, m, nums2, n) {
    // Initialize three pointers i, j, and k.
    // i starts at the last valid index of nums1 (i.e., m - 1).
    // j starts at the last valid index of nums2 (i.e., n - 1).
    // k starts at the last index of the merged array nums1 (i.e., m + n - 1).
    var i = m - 1;
    var j = n - 1;
    var k = m + n - 1;
    // While there are still elements to merge from nums2.
    while (j >= 0) {
        // If i is greater than or equal to 0, and the element at index i in nums1
        // is greater than the element at index j in nums2, it means the element from
        // nums1 is larger, and it should be placed at the current position of k
        // in the merged array. After this, i and k are decremented.
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        }
        else {
            // If the condition in the previous step is not true, it means the element
            // from nums2 is larger or equal, and it should be placed at the current
            // position of k in the merged array. After this, j and k are decremented.
            nums1[k--] = nums2[j--];
        }
    }
};
