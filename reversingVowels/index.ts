const reverseVowels = (s: string): string => {
  // Convert the input string to a character array.
  const word: string[] = Array.from(s);
  let start = 0;
  let end = s.length - 1;
  const vowels = "aeiouAEIOU";

  // Loop until the start pointer is no longer less than the end pointer.
  while (start < end) {
    // Move the start pointer towards the end until it points to a vowel.
    while (start < end && vowels.indexOf(word[start]) === -1) {
      start++;
    }

    // Move the end pointer towards the start until it points to a vowel.
    while (start < end && vowels.indexOf(word[end]) === -1) {
      end--;
    }

    // Swap the vowels found at the start and end positions.
    [word[start], word[end]] = [word[end], word[start]];

    // Move the pointers towards each other for the next iteration.
    start++;
    end--;
  }

  // Convert the character array back to a string and return the result.
  return word.join("");
};
console.log(reverseVowels("joptkoihfek"));
