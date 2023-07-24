function canConstruct(magazine: string, ransomNote: string): boolean {
  const mp: Map<string, number> = new Map();

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote.charAt(i);
    mp.set(char, (mp.get(char) || 0) + 1);
  }

  for (let i = 0; i < magazine.length; i++) {
    const char = magazine.charAt(i);
    if (mp.get(char) && mp.get(char)! > 0) {
      mp.set(char, mp.get(char)! - 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(canConstruct("aa", "aab"));
