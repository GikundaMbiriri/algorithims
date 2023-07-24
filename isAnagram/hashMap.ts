function isAnagram(s: string, t: string): boolean {
  const count: number[] = Array(26).fill(0);

  // Count the frequency of characters in string s
  for (let i = 0; i < s.length; i++) {
    const x = s[i];
    count[x.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  // Decrement the frequency of characters in string t
  for (let i = 0; i < t.length; i++) {
    const x = t[i];
    count[x.charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  // Check if any character has non-zero frequency
  for (const val of count) {
    if (val !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagjram", "mairgana"));
export {};
