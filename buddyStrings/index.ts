const buddyStrings = (s: string, goal: string): boolean => {
  const n = s.length;
  if (s === goal) {
    const temp = new Set(s);
    return temp.size < goal.length; // Swapping same characters
  }

  let i = 0;
  let j = n - 1;

  while (i < j && s[i] === goal[i]) {
    i++;
  }

  while (j >= 0 && s[j] === goal[j]) {
    j--;
  }

  if (i < j) {
    const sList = s.split("");
    [sList[i], sList[j]] = [sList[j], sList[i]];
    s = sList.join("");
  }

  return s === goal;
};
console.log(buddyStrings("good", "good"));
