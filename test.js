// There is an array with some numbers. All numbers are equal except for one. Try to find it! 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
// It’s guaranteed that array contains at least 3 numbers

function findUniq(arr) {
    for(let i = 0; i<arr.length ; i++ ){
        const number = arr[i];
        if(arr.indexOf(number) === arr.lastIndexOf(number)){
            return number;
        }
    }
    return "There is no unique number";
 }
 /* --------------------------------- DRIVER --------------------------------- */
 console.log(findUniq([ 2,2,2,1,2 ]))
 console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))
 