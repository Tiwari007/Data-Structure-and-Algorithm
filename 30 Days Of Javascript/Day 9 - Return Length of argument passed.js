// Write a function argumentsLength that returns the count of arguments passed to it.


// Example 1:

// Input: argsArr = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.



var argumentsLength = function (...args) {
    // return args.length

    let count = 0
    args.map(ele => {
        return count++;
    })

    return count
};


argumentsLength(1, 2, 3); // 3
