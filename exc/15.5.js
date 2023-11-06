function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));
// 1. First, find the line that contains the problem. Write it down. - line number 5
// 2. Which debug method did you use to find the bug? - breakpoints to see counter param
// 3. Explain the bug in your own words. - counter param wasnet accumulated
// 4. Fix the code and submit it all.
