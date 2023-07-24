var buddyStrings = function (s, goal) {
    var _a;
    var n = s.length;
    if (s === goal) {
        var temp = new Set(s);
        return temp.size < goal.length; // Swapping same characters
    }
    var i = 0;
    var j = n - 1;
    while (i < j && s[i] === goal[i]) {
        i++;
    }
    while (j >= 0 && s[j] === goal[j]) {
        j--;
    }
    if (i < j) {
        var sList = s.split("");
        _a = [sList[j], sList[i]], sList[i] = _a[0], sList[j] = _a[1];
        s = sList.join("");
    }
    return s === goal;
};
console.log(buddyStrings("good", "good"));
