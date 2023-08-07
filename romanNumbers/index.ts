function romanToInt(s: string): number {
  const m: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (m[s[i]] < m[s[i + 1]]) {
      ans -= m[s[i]];
    } else {
      ans += m[s[i]];
    }
  }

  return ans;
}

// Usage example:
const romanNumeral: string = "MCMXCIV"; // Roman numeral for 1994
const result: number = romanToInt(romanNumeral);
console.log(result); // Output: 1994
