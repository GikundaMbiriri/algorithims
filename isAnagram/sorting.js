function isAnagram(s, t) {
    var sortedS = s.split("").sort().join("");
    var sortedT = t.split("").sort().join("");
    return sortedS === sortedT;
}
console.log(isAnagram("anagjram", "mairgana"));
