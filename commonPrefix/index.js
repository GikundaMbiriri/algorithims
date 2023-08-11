function longestCommonPrefix(strs) {
    strs.sort();
    var s1 = strs[0];
    var s2 = strs[strs.length - 1];
    var idx = 0;
    while (idx < s1.length && idx < s2.length) {
        if (s1.charAt(idx) === s2.charAt(idx)) {
            idx++;
        }
        else {
            break;
        }
    }
    return s1.substring(0, idx);
}
