// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0





// time Complexity: O(n * m)
// space Complexity: 0(1) as we didn't use any extra space
var countNegatives = function(grid) {

    console.log("grid", grid)

    let countNegative = 0 
    grid.map(singleGrid => {
        singleGrid.map(ele => {
            countNegative += ele < 0 ? 1 : 0 
        })
    })

    console.log("countNegative ", countNegative)

    return countNegative
    
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));