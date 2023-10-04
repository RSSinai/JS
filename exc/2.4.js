const date = new Date();

const weekday = {
  weekday: "long",
};

const year = {
  year: "numeric",
};

const month = {
  month: "long",
};

const day = {
  day: "numeric",
};

let weekDays = date.toLocaleString("en-IN", weekday);
let days = date.toLocaleString("en-IN", day);
let months = date.toLocaleString("en-IN", month);
let years = date.toLocaleString("en-IN", year);

console.log("please attach :))")