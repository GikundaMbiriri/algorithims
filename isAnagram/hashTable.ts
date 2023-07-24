function isAnagram(s: string, t: string): boolean {
  const count: { [key: string]: number } = {};

  // Count the frequency of characters in string s
  for (const char of s) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  // Decrement the frequency of characters in string t
  for (const char of t) {
    if (count[char]) {
      count[char]--;
    } else {
      count[char] = -1;
    }
  }

  // Check if any character has non-zero frequency
  for (const val of Object.values(count)) {
    if (val !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagjram", "mairgana"));
export {};
