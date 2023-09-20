const numSibiling = prompt("How many siblings do you have?");
if (numSibiling == 1) {
  console.log("1 sibling!");
} else if (numSibiling > 1) {
  console.log("More than 1 sibling");
} else {
  console.log("No siblings");
}
console.log(typeof(numSibiling))
const parsed = parseInt(numSibiling)
// Answer for 6, this is because == does the type conversion of the operands before comparison for value and === compares the values as well as the data types

