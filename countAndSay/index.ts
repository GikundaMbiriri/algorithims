function countAndSay(n: number): string {
  if (n === 1) {
    return "1";
  }
  if (n === 2) {
    return "11";
  }

  let nm: string = "11";
  for (let i = 3; i <= n; i++) {
    let kk: string = task(nm);
    nm = kk;
  }

  return nm;
}

function task(s: string): string {
  let count: number = 1;
  let nm: string = "";

  for (let i = 0; i < s.length - 1; i++) {
    if (s.charAt(i) === s.charAt(i + 1)) {
      count++;
    } else {
      nm += count + s.charAt(i);
      count = 1;
    }
  }
  nm += count + s.charAt(s.length - 1);

  return nm;
}
