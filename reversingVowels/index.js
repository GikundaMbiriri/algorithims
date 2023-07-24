var reverseVowels = function (s) {
    var _a;
    // Convert the input string to a character array.
    var word = Array.from(s);
    var start = 0;
    var end = s.length - 1;
    var vowels = "aeiouAEIOU";
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
        _a = [word[end], word[start]], word[start] = _a[0], word[end] = _a[1];
        // Move the pointers towards each other for the next iteration.
        start++;
        end--;
    }
    // Convert the character array back to a string and return the result.
    return word.join("");
};
console.log(reverseVowels("joptkoihfek"));
