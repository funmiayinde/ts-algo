import validAnagrams from "./examples/validAnagrams";
import uniqueInOrder from "./examples/unique-in-order";
import same from "./examples/same";
import sumZero from "./examples/sum-zero";
import averagePair from "./examples/average-pair";
import countUniqueValues from "./examples/count-unique-values";
import maxSubArraySum from "./examples/max-sub-array-sum";
import addDigits from "./examples/add-digit";
import maxProfit from "./examples/max-profit";

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//   anagrams('Hi there', 'Bye there') --> False

/**
 * @param { number[] } nums
 * @param { number } target
 * @return { number[] }
 */
const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

console.log("result:", twoSum([2, 7, 11, 15], 9));
