/* -------------------------------------------------------------------------- */
/*                                     1.1                                    */
/* -------------------------------------------------------------------------- */

function boolFunc(bool) {
  if (bool === true) {
    return "yes";
  } else {
    return "no";
  }
}

/* --------------------------------- DRIVER --------------------------------- */
console.log(boolFunc(true))
console.log(boolFunc(false))





/* -------------------------------------------------------------------------- */
/*                                     2.1                                    */
/* -------------------------------------------------------------------------- */

function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
     
    for (var j = 0; j < arr.length - i - 1; j++) {
 
      if (arr[j] > arr[j + 1]) {
 
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr[0] + arr[1];
}

/* --------------------------------- DRIVER --------------------------------- */
console.log(bblSort([3, 5, 75, 3, 26, 7, 8, 4, 3, 2, 6455342, 1, 0.5]))





/* -------------------------------------------------------------------------- */
/*                                     2.2                                    */
/* -------------------------------------------------------------------------- */


function bin2int(array) {
  let text = array.join("");
  let a = parseInt(text, 2);
  return a;
}

/* --------------------------------- DRIVER --------------------------------- */
console.log(bin2int([0, 1, 0, 0, 1, 0, 1, 1]));






/* -------------------------------------------------------------------------- */
/*                                     2.3                                    */
/* -------------------------------------------------------------------------- */

function findNextSqrt(powered) {
  if (Number.isInteger(powered) && Number.isInteger(Math.sqrt(powered))) {
    let root = Math.sqrt(powered);
    let newRoot = root + 1;
    let result = newRoot * newRoot;
    return result;
  } else {
    return "-1";
  }
}
/* --------------------------------- DRIVER --------------------------------- */
console.log(findNextSqrt(114))






/* -------------------------------------------------------------------------- */
/*                                     2.4                                    */
/* -------------------------------------------------------------------------- */

function findUniq(arr) {
   let array = arr
    array = array.sort();

   if (array[0] !== arr[1]) {
     return array[0];
  } else {
     return array[array.length - 1];
  }
}
/* --------------------------------- DRIVER --------------------------------- */
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))








/* -------------------------------------------------------------------------- */
/*                                     2.5                                    */
/* -------------------------------------------------------------------------- */

function summ(num) {
    let number = num
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr[i] = i + 1;
  }
  console.log(arr);

  let start = 0,
    end = arr.length,
    sum = 0;
  for (let i = start; i < end; i++) {
    sum += arr[i];
  }
  return sum;
}


/* --------------------------------- DRIVER --------------------------------- */
console.log(summ(2))
console.log(summ(8))


/* -------------------------------------------------------------------------- */
/*                                     2.6                                    */
/* -------------------------------------------------------------------------- */

function centuryFromYear(year)
{
    let unrounded = year
    return Math.ceil(unrounded/100)
}
/* --------------------------------- DRIVER --------------------------------- */
console.log(centuryFromYear(1705))






/* -------------------------------------------------------------------------- */
/*                                     2.7                                    */
/* -------------------------------------------------------------------------- */


function basicOp(operation, value1, value2) {
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else if (operation == "/") {
    return value1 / value2;
  } else return "the operator isn't recognized";
}

/* --------------------------------- DRIVER --------------------------------- */
console.log(basicOp('+', 4, 7)) 
console.log(basicOp('-', 15, 18)) 
console.log(basicOp('*', 5, 5)) 
console.log( basicOp('/', 49, 7))






/* -------------------------------------------------------------------------- */
/*                                     4.1                                    */
/* -------------------------------------------------------------------------- */

function fibonacci_numbers(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return fibonacci_numbers(n - 2) + fibonacci_numbers(n - 1);
    }
}


let n = 7;
for (let i = 0; i < n; i++) {
    document.write(fibonacci_numbers(i) + " ");
}

  /* --------------------------------- DRIVER --------------------------------- */
  console.log(fibonacci_numbers(4))






  
/* -------------------------------------------------------------------------- */
/*                                     5.1                                    */
/* -------------------------------------------------------------------------- */

function removeFirstLast(string) {
  let str = string;
  str = str.replace(str[0], "");
  str = str.replace(str[str.length - 1], "");
  return str;
}


/* --------------------------------- DRIVER --------------------------------- */
console.log(removeFirstLast("hello"))








/* -------------------------------------------------------------------------- */
/*                                     5.2                                    */
/* -------------------------------------------------------------------------- */


function repeatStr(number, string) {
  let str = string;
  let num = number;
  string = string.repeat(num);
  return string;
}


/* --------------------------------- DRIVER --------------------------------- */
console.log(repeatStr(4, "hello"))





/* -------------------------------------------------------------------------- */
/*                                     5.3                                    */
/* -------------------------------------------------------------------------- */

// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function convert(string) {
  let str = string.replaceAll("-", " ").split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() ;
    
  }
  return str + str
}

/* --------------------------------- DRIVER --------------------------------- */
console.log(convert("rony is kugn"))
/* -------------------------------------------------------------------------- */
/*                                     5.5                                    */
/* -------------------------------------------------------------------------- */

function convert2init(string) {
  let str = string.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase();
  }
  return str.join(".");
}

/* --------------------------------- DRIVER --------------------------------- */
console.log(convert2init('calvin harris'))





/* -------------------------------------------------------------------------- */
/*                                     5.6                                    */
/* -------------------------------------------------------------------------- */


function maskify(string) {
  let strings = string;
  let strings4 = strings.slice(-4);
  let str = "*";
  let repeatCount = str.repeat(strings.length - 4);
  return repeatCount + strings4
}

/* --------------------------------- DRIVER --------------------------------- */
console.log(maskify("4580160112341234"))





/* -------------------------------------------------------------------------- */
/*                                     5.7                                    */
/* -------------------------------------------------------------------------- */

function shortWordCounter(string) {
  let lengthArr = [];
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    lengthArr[i] = words[i].length;
  }
  lengthArr.sort();
  return lengthArr[0];
}
/* --------------------------------- DRIVER --------------------------------- */
console.log(shortWordCounter("this is hello and annoying"))





/* -------------------------------------------------------------------------- */
/*                                     6.1                                    */
/* -------------------------------------------------------------------------- */
function accum(string) {
  let str = string;
  str.split();
  console.log(str);
}
/* -------------------------------------------------------------------------- */
/*                                     6.2                                    */
/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                                     6.4                                    */
/* -------------------------------------------------------------------------- */


function isogram(string) {
  let str = string;
  let arr = str.split("");
  arr = arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      return "false";
    }
    else
    {
        return "true"
    }
  }
}

/* --------------------------------- DRIVER --------------------------------- */
console.log(isogram("hello"))