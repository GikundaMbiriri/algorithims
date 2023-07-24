function gcdOfStrings(str1, str2) {
    return str1 + str2 === str2 + str1
        ? str1.substr(0, gcd(str1.length, str2.length))
        : "";
}
function gcd(a, b) {
    while (b !== 0) {
        console.log("a", a, "b", b);
        var temp = b;
        console.log("temp", temp);
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(gcdOfStrings("abc", "abc"));
