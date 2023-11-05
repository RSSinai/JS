function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmallest(52, 66, 2))

// 1. First, find the line that contains the problem. Write it down. - the line is 10
// 2. Which debug method did you use to find the bug? - a small line under the function
// 3. Explain the bug in your own words. - wrong spelling
// 4. Fix the code and submit it all.