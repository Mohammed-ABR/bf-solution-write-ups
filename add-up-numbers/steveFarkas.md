# [Steve Farkas](https://edabit.com/user/4p2sARSZNNnKqjAT6)

js
function addUp(num) {
  var result = 0;
  for (var i = 0; i <= num; i++) {
    result = result + i;
  }
  return result;
}

## Strategy

This approach uses a basic iterative loop starting from 0 to the given number.
It adds each number to a cumulative result using a
simple for loop.

## Implementation

The function initializes a result variable at 0, then uses a for loop to
iterate from 0 up to and including num,
incrementally adding each value to result. Finally, it returns the total sum.

## Possible Refactors

• Use let instead of var for better scoping.
• Start loop from 1 to avoid unnecessary addition of 0.
• Replace the loop with a mathematical formula: return num * (num + 1) / 2.
• Convert to an arrow function for brevity.
