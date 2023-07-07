// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(x = 0; x< nums.length-1; x++ ){
        for(y= x+1; y<nums.length; y++){
            if(nums[x]+ nums[y] == target){
                return [x,y];
            }
        }
    }
};

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = String(x);
    let left = 0;
    let right = str.length -1 ;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        right--;
        left++;
    }
    return true
};