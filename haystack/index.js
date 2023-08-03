function strStr(haystack, needle) {
    var hLen = haystack.length;
    var nLen = needle.length;
    var nIndex = 0;
    for (var i = 0; i < hLen; i++) {
        if (haystack.charAt(i) === needle.charAt(nIndex)) {
            nIndex++;
        }
        else {
            i = i - nIndex;
            nIndex = 0;
        }
        if (nIndex === nLen) {
            return i - nLen + 1;
        }
    }
    return -1;
}
