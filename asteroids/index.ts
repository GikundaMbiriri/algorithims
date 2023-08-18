function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (const it of asteroids) {
    let flag = 1;

    while (stack.length > 0 && stack[stack.length - 1] > 0 && it < 0) {
      if (Math.abs(stack[stack.length - 1]) < Math.abs(it)) {
        stack.pop();
        continue;
      } else if (Math.abs(stack[stack.length - 1]) === Math.abs(it)) {
        stack.pop();
      }

      flag = 0;
      break;
    }

    if (flag) {
      stack.push(it);
    }
  }

  const ans: number[] = new Array(stack.length);
  for (let i = ans.length - 1; i >= 0; i--) {
    ans[i] = stack.pop()!;
  }

  return ans;
}
console.log(asteroidCollision([5, 10, -5]));

export {};
