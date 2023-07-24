"use strict";
exports.__esModule = true;
function isAnagram(s, t) {
    var count = Array(26).fill(0);
    // Count the frequency of characters in string s
    for (var i = 0; i < s.length; i++) {
        var x = s[i];
        count[x.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    // Decrement the frequency of characters in string t
    for (var i = 0; i < t.length; i++) {
        var x = t[i];
        count[x.charCodeAt(0) - "a".charCodeAt(0)]--;
    }
    // Check if any character has non-zero frequency
    for (var _i = 0, count_1 = count; _i < count_1.length; _i++) {
        var val = count_1[_i];
        if (val !== 0) {
            return false;
        }
    }
    return true;
}
console.log(isAnagram("anagjram", "mairgana"));
