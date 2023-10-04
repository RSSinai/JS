// Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places.
const radius = 2
const pi = 3.141592
function calculateArea(radius,pi)
{
    let area = pi * radius * radius  
    return area
}

console.log(calculateArea(radius,pi).toFixed(2))