# [Marco](https://edabit.com/user/XvFCLyjCaZAPPTrCS)

js
function addUp(num) {
  let i = 0;
  let v = 0;
  while( i < num){
    v = i+v
    i++
  }
  return v+num;
}

## Strategy

This solution uses a while loop to iteratively sum numbers from 0 up to num - 1,
then adds num at the end to complete the total. It avoids using a for loop,
opting for a while structure instead.

## Implementation

The function initializes two variables: i as a counter and v as an accumulator.
It loops while i is less than num, adding i to v and incrementing i. After the loop,
it returns v + num to include the last number in the sum.

## Possible Refactors

•Combine the logic by looping up to and including num to avoid adding it separately.
• Use a for loop for more concise syntax.
• Use the formula return num * (num + 1) / 2 for a cleaner and more efficient solution.
• Use clearer variable names like sum and count for better readability.
