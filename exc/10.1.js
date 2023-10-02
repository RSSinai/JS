// Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.
/* -------------------------------------------------------------------------- */
/*                                      1                                     */
/* -------------------------------------------------------------------------- */
// function isString(string, callback) {
//   if (string === "string") {
//     callback();
//   } else {
//     console.log("not a string");
//   }
// }

function isString(string, callback) {
  if (typeof string === "string") {
    callback(string);
  } else {
    console.log("not a string");
  }
}

function callMe(string) {
  console.log(string);
}

/* --------------------------------- DRIVER --------------------------------- */
isString("this is radio bla bla", callMe);

// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
/* -------------------------------------------------------------------------- */
/*                                      2                                     */
/* -------------------------------------------------------------------------- */
function firstWordUpperCase(string, callback) {
  string = string.split(" ");
  string[0] = string[0].charAt(0).toUpperCase() + string[0].slice(1);
  let modifiedString = string.join(" ");
  console.log(modifiedString)
  callback(modifiedString);
}

function adder(string){
  string = string.split(' ').join('-')
  console.log(string)
}

firstWordUpperCase("bla vla", adder);

// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
/* -------------------------------------------------------------------------- */
/*                                      3                                     */
/* -------------------------------------------------------------------------- */

// 4. Create your own function that will receive from one of its
// arguments a callback function
/* -------------------------------------------------------------------------- */
/*                                      4                                     */
/* -------------------------------------------------------------------------- */
// function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Peter", callMe);
