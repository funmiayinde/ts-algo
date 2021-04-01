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

// console.log("result:", twoSum([2, 7, 11, 15], 9));

/** 
Given an array of integers and an integer k, find out whether there are two distinct indices i and 
//j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
**/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums: number[], k: number) => {
  let j = 1;
  for (let i = 0; i < nums.length; i++) {
    const sum = nums[i] + nums[j];
    if (sum === k) {
      return true;
    }
    j++;
  }
  return false;
};

// console.log("result:", containsNearbyDuplicate([1, 2, 3, 1], 3));

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = (nums: number[]): boolean => {
  const char = {};
  const max = 1;

  for (let num of nums) {
    if (char[num]) {
      char[num]++;
    } else {
      char[num] = 1;
    }
  }

  for (let key in char) {
    if (char[key] > max) {
      return true;
    }
  }
  return false;
};

console.log("result:", containsDuplicate([1, 2, 3, 4]));
