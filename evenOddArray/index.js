function oddEven(a, b) {
    return (a & 1) !== (b & 1);
}
function longestAlternatingSubarray(A, K) {
    var cnt = 0;
    var res = 0;
    for (var i = 0; i < A.length; ++i) {
        if (i > 0 && oddEven(A[i], A[i - 1]) && Math.max(A[i], A[i - 1]) <= K) {
            cnt++;
        }
        else {
            cnt = A[i] % 2 === 0 && A[i] <= K ? 1 : 0;
        }
        res = Math.max(res, cnt);
    }
    return res;
}
