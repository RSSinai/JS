const people = ["Greg", "Mary", "Devon", "James"];
let copy1 = copy2 = copy3 = copy4 = people.slice(0)

/* -------------------------------------------------------------------------- */
/*                                      1                                     */
/* -------------------------------------------------------------------------- */
copy1 = copy1.slice(1)
console.log(copy1)
/* -------------------------------------------------------------------------- */
/*                                      2                                     */
/* -------------------------------------------------------------------------- */
copy2 = copy2.slice(0,copy2.length-1)
console.log(copy2)
/* -------------------------------------------------------------------------- */
/*                                      3                                     */
/* -------------------------------------------------------------------------- */
copy3.unshift("Matt");
console.log(copy3);
/* -------------------------------------------------------------------------- */
/*                                      4                                     */
/* -------------------------------------------------------------------------- */
copy4.push("Rony")
console.log(copy4)
/* -------------------------------------------------------------------------- */
/*                                      5                                     */
/* -------------------------------------------------------------------------- */
let newarr = []
for(let i=0; i<people.length;i++)
{
    newarr[i] = people[i].slice()
}
newarr.splice(1,1)
console.log(newarr)
/* -------------------------------------------------------------------------- */
/*                                      6                                     */
/* -------------------------------------------------------------------------- */
for(let i=0; i<people.length;i++)
{
    if (people[i] == "Mary")
    {
        console.log("mary is located at index number "+i)
    }
}
/* -------------------------------------------------------------------------- */
/*                                      7                                     */
/* -------------------------------------------------------------------------- */
// the function will not return anything since 'Foo' is not recognized by the if statement



/* -------------------------------------------------------------------------- */
/*                                      8                                     */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                      9                                     */
/* -------------------------------------------------------------------------- */
let withBob = "Bob"
people.push(withBob)
console.log(people)