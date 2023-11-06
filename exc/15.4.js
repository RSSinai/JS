function calcAverage(arr) {
  let sum;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

calcAverage([85, 90, 92]);

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down. - line 2 sum param wasnt initilazied 
// 2. Which debug method did you use to find the bug? - breakpoints 
// 3. Explain the bug in your own words. - sum was undefined and adding a number to it changed to NaN
// 4. Fix the code and submit it all.
