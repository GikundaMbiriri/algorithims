"use strict";
exports.__esModule = true;
/**
 * Merge two sorted arrays nums1 and nums2 into the first array nums1.
 * @param nums1 The array with extra space to hold the merged result.
 * @param m The number of elements in nums1.
 * @param nums2 The array with n elements.
 * @param n The number of elements in nums2.
 */
var merge = function (nums1, m, nums2, n) {
    // Merge nums2 into nums1 starting from the end of nums1 and the beginning of nums2.
    // i is initialized to m, which is the index at the end of nums1.
    // j is initialized to 0, which is the index at the beginning of nums2.
    for (var i = m, j = 0; j < n; i++, j++) {
        // Copy the element at index j in nums2 to index i in nums1.
        nums1[i] = nums2[j];
    }
    // Sort the merged array nums1 in ascending order using the compare function (a - b).
    // This will reorder the elements to have the final sorted array.
    nums1.sort(function (a, b) { return a - b; });
};
