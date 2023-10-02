/*
John and Mike both play basketball on different teams. In the
latest 3 games, John's team scored 89, 120, and 103 points,
while Mike's team scored 116, 94, and 123 points.
1. Calculate the average score for each team.
2. Decide which team wins on average (highest average
score), and print the winner to the console. Also include
the average score in the output.

3. Then change the scores to show different winners. Don't
forget to take into account that there might be a draw (the
same average score).

4. EXTRA: Mary also plays basketball, and her team scored
97, 134, and 105 points. Like before, log the average
winner to the console.

5. Like before, change the scores to generate different
winners, keeping in mind there might be draws.
*/

let mikeFirst = 116;
let mikeSecond = 94;
let mikeThird = 123;


let mikeAvg = (mikeFirst +mikeSecond +mikeThird)/3;

let johnFirst = 89;
let johnSecond = 120;
let johnThird = 103;

let johnAvg = (johnFirst +johnSecond+johnThird)/3;


console.log(johnAvg, mikeAvg)

if(johnAvg < mikeAvg )
{
    console.log('Mike in the Winner in the average total of ' + mikeAvg)
}

else if (johnAvg > mikeAvg)
{
    console.log('John in the Winner in the average total of '+ johnAvg)
}

else
{
    console.log('its a draw!')
}


let maryFirst = 97;
let marySecond = 134;
let maryThird = 105;

let maryAvg = (maryFirst +marySecond+maryThird)/3;

1,2 ,1,3 ,2,3

if (johnAvg > mikeAvg && johnAvg > maryAvg)
{
    console.log('john is is the winner')
}
else if (maryAvg > johnAvg && maryAvg > mikeAvg)
{
    console.log('mary is the winner')
}
else if (mikeAvg > maryAvg && mikeAvg > johnAvgAvg)
{
    console.log('mike is the winner')
}
else
{
    console.log('its a draw between contestants')
}