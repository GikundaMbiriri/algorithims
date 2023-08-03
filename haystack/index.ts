function strStr(haystack: string, needle: string): number {
    const hLen: number = haystack.length;
    const nLen: number = needle.length;
    let nIndex: number = 0;

    for (let i = 0; i < hLen; i++) {
        if (haystack.charAt(i) === needle.charAt(nIndex)) {
            nIndex++;
        } else {
            i = i - nIndex;
            nIndex = 0;
        }

        if (nIndex === nLen) {
            return i - nLen + 1;
        }
    }
    return -1;
}

