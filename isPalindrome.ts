function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let reversedNumber = 0,
    temp = x;
  while (temp !== 0) {
    let k = temp % 10;
    reversedNumber = reversedNumber * 10 + k;
    temp = Math.floor(temp / 10);
  }
  return reversedNumber === x;
}
console.log(isPalindrome(888));
