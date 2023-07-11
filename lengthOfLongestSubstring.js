var lengthOfLongestSubstring = function (s) {
  var stringObject = {};

  for (i = 0; i < s.length; i++) {
    if (stringObject[s[i]] !== undefined) {
      return i;
    } else {
      stringObject[s[i]] = i;
    }
  }
  return s.length;
};

console.log(lengthOfLongestSubstring("berdf"));
