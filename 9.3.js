const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber","Olives"];
const food3 =  ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber","Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
let counter = 0 
for(let i=0; i<food1.length;i++)
{
    
    if(food1[i] !== food3[i])
    {
        console.log("this is not the same array")
        break;
    }
    else
    {
        counter++
    }
}

if(counter === food1.length)
{
    console.log('the array is the same')
}