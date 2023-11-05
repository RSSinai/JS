// Write a JavaScript function that receives the following library
// object as an input and displays the books that can be read (the
// reading status is true).
// Log the book name, author name, and reading status.

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function receives() {
  const readable = [];
  library.forEach((ele)=>{ if(ele.readingStatus === true){readable.push(ele)}})
  return readable
}
console.log(receives())