var maxProfit = function (prices) {
  let leftIndex = 0,
    rightIndex = 1,
    maxMargin = 0;
  while (rightIndex < prices.length) {
    if (prices[leftIndex] < prices[rightIndex]) {
      let profit = prices[rightIndex] - prices[leftIndex];
      maxMargin = Math.max(maxMargin, profit);
    } else {
      leftIndex = rightIndex;
    }
    rightIndex++;
  }
  return maxMargin;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
