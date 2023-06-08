// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

 

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:

// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.



// _____________________Brute Force _______________

// Time Complexity: O(n)
// Space Compleity: O(1)
var maximumCount = function(nums) {
    console.log("nums", nums)

    let countNegative = 0  
    let countPositive = 0
    nums.map(ele => {
        if(ele < 0) countNegative += 1
        if(ele > 0) countPositive += 1
    })

    console.log("countNegative ", countNegative)

    return countNegative > countPositive ? countNegative : countPositive
};

// console.log(maximumCount([-3,-2,-1,0,0,1,2]))


// _____________________Binary Search______________

var maximumCount = function(nums) {
    console.log("nums", nums)

    let start = 0
    let end = nums.length - 1

    return Math.max(upper_bound(nums, start, end), lower_bound(nums, start, end))
    
};

const upper_bound = (nums, start, end) => {
    while( start < end){
        let mid  = Math.floor((start + end) / 2)
        if(nums[mid] > 0){
            end = mid
        }
        else{
            start = mid + 1
        }
    }

    return nums[nums.length - 1] <= 0 ? 0 : nums.length - start;
}

const lower_bound = (nums, start, end) => {
    while( start < end){
        let mid  = Math.ceil((start + end) / 2)
        if(nums[mid] < 0){
            start = mid
        }
        else{
            end = mid - 1
        }
    }

    return nums[0] >= 0 ? 0 : start + 1;
}

console.log(maximumCount([-3,-2,-1,0,0,1,2]))