function countAndSay(n) {
    if (n === 1) {
        return "1";
    }
    if (n === 2) {
        return "11";
    }
    var nm = "11";
    for (var i = 3; i <= n; i++) {
        var kk = task(nm);
        nm = kk;
    }
    return nm;
}
function task(s) {
    var count = 1;
    var nm = "";
    for (var i = 0; i < s.length - 1; i++) {
        if (s.charAt(i) === s.charAt(i + 1)) {
            count++;
        }
        else {
            nm += count + s.charAt(i);
            count = 1;
        }
    }
    nm += count + s.charAt(s.length - 1);
    return nm;
}
