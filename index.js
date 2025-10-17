/**
 * Write a function named containsDuplicate that takes an array of integers (nums) as input 
 * and returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * Problem: Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 *
 * Examples:
 * - containsDuplicate([1,2,3,1]) → true
 * - containsDuplicate([1,2,3,4]) → false  
 * - containsDuplicate([1,1,1,3,3,4,3,2,4,2]) → true
 */

const containsDuplicate = (nums) => {
  // My first through is using a for loop, in order to
  // go through the array, where later I would have to use a
  // frequency object to be able to detect if a given value appears twice
  // I also know I may need two for loops, but I'm not exactly sure given 
  // that I'm riding off of yesterdays exercise, and that prompt may be asking
  // for something different  


  // I create frequency object to store the nums
  const frequency = {};

  // The for loop is there iterating through each value
  for (let i = 0; i < nums.length; i++) {
    const numsCount = nums[i];
    // The if else statement is to check if the number is present in the frequency object 
    if (frequency[numsCount] === undefined) {
      frequency[numsCount] = 1;
    } else {
      frequency[numsCount] += 1;
    }
  } // So noew we have the count of each number
  // Then the second for loop would come into play
  for (let i = 0; i < nums.length; i++) {
    const numsCount = nums[i];
    // Next if else comes into play now, to see if the value repeats, and 
    // returning true if they do, but false if elements don't repeat
    if (frequency[numsCount] === 2) {
      return true
    } else {
      return false
    }
  } // I didn't have time to figure out other cases like empty array, more than two repeats, etc.

};

// Export the function for testing
module.exports = { containsDuplicate };

// Example usage (commented out to avoid interference with tests)
// console.log(containsDuplicate([1,2,3,1])); // → true
// console.log(containsDuplicate([1,2,3,4])); // → false
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // → true