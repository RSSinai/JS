// Create a function that takes one argument, an array.
// Use this array:
const arr = ["Helllllllo", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
let sum = ""
for(let i=0; i<arr.length;i++)
{
   sum = sum.concat(arr[i])

}

console.log(sum)
let split = sum.split(" ").join("")
console.log(split)

split = split.toLowerCase()

console.log(split)

const countLetters = word => {
	const count = {};

	word.split('').forEach(letter => {
		count[letter] = count[letter] ? ++count[letter] : 1;
	});

	return count;
};

console.log(countLetters(split))