function asteroidCollision(asteroids) {
  var stack = [];
  for (var _i = 0, asteroids_1 = asteroids; _i < asteroids_1.length; _i++) {
    var it = asteroids_1[_i];
    var flag = 1;
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
  var ans = new Array(stack.length);
  for (var i = ans.length - 1; i >= 0; i--) {
    ans[i] = stack.pop();
  }
  return ans;
}
console.log(asteroidCollision([5, 10, -15]));
