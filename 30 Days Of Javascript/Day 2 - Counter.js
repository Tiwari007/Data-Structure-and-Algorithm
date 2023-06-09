// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).



// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.



// _________________________

// This is a good example of closure.

// One benefit of returning a nested function instead of just an incremented value is that it allows you to create multiple independent counters, each with its own internal state, without having to create a separate function for each one.

// A closure is a function that has access to variables in its outer (enclosing) function's scope chain.
// In this code, the inner function that is returned by the "createCounter" function is a closure, and it has access to the "n" variable in the outer "createCounter" function's scope.

// Example:

var createCounter = function (n) {
    return function () {
        return n++;
    };
};

const counter1 = createCounter(10);
const counter2 = createCounter(20);






// Using Closure
function createAdder(a) {
    return function add(b) {
      const sum = a + b;
      return sum;
    }
  }
  const addTo2 = createAdder(2);
  addTo2(5); // 7