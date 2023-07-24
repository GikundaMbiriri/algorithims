function gcdOfStrings(str1: string, str2: string): string {
  return str1 + str2 === str2 + str1
    ? str1.substr(0, gcd(str1.length, str2.length))
    : "";
}
function gcd(a: number, b: number): number {
  while (b !== 0) {
    console.log("a", a, "b", b);
    const temp = b;
    console.log("temp", temp);
    b = a % b;
    a = temp;
  }
  return a;
}
console.log(gcdOfStrings("abc", "abc"));
