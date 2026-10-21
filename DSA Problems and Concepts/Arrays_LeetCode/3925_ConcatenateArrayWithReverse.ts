function concatWithReverse(nums: number[]): number[] {
    const numsLen = nums.length;
    let res: number[] = [];
    res.push(...nums);
    for( let i = numsLen - 1; i >= 0; i--){
        res.push(nums[i])
    }
    return res;
};

console.log(concatWithReverse([1, 2, 3])); // Output: [1, 2, 3, 3, 2, 1]