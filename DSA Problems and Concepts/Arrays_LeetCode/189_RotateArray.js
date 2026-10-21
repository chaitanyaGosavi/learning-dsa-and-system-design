"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    /*
    This is TS Specific code
    k = k % nums.length;
    nums.unshift(...nums.splice(-k));
    */
    // This is proper solution for all languages
    const numsLen = nums.length - 1;
    let temp = [];
    temp = nums.splice(0, k);
    temp = temp.reverse();
    console.log(temp);
    nums = temp.concat(nums);
    console.log(nums);
}
;
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log("Before rotation:", nums);
rotate(nums, k);
console.log("After rotation:", nums);
