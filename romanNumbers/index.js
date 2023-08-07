function romanToInt(s) {
    var m = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var ans = 0;
    for (var i = 0; i < s.length; i++) {
        if (m[s[i]] < m[s[i + 1]]) {
            ans -= m[s[i]];
        }
        else {
            ans += m[s[i]];
        }
    }
    return ans;
}
// Usage example:
var romanNumeral = "MCMXCIV"; // Roman numeral for 1994
var result = romanToInt(romanNumeral);
console.log(result); // Output: 1994
