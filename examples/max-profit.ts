// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0

// In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {Array} arr
 */
const maxProfit = (arr: number[]) => {
  if (arr.length === 0) return 0;

  let min: number = arr[0];
  let max: number = 0;

  for (let i = 1; i < arr.length; i++) {
    console.log("diff:", arr[i] - min);
    console.log("max:", max);
    console.log("min:", min);
    if (arr[i] > min) {
      max = Math.max(max, arr[i] - min);
    } else {
      min = arr[i];
    }
  }
  return max;
};
export default maxProfit;
