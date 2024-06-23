// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!


// const oddCount = (n) => defines an arrow function named oddCount that takes one parameter n.

// Math.floor(n / 2) is the function body:
// It divides n by 2
// Then uses Math.floor() to round down to the nearest integer

const oddCount = (n) => Math.floor(n / 2);


function oddCount(n){
    return Math.floor(n/2);
  }


  function oddCount(n){
    let odd = Math.round((n - 1) / 2);
    return odd;
  }