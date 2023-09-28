// 1. create a guessing game to find out a number.
// 2. Create a random integer (full number, not 4.5, 3.54) between 0 and 50,
// and store it in a variable. (google how to do it!)
// 3. Create a prompt to ask the user for a guess. If the guess is correct –
// alert that the guess was write, and stop the game.
// 4. If the guess is too low – console.log that the guess was to low, and
// prompt again. Same for too high.
// 5. The game continues while the correct number was not guessed by the
// user.

let rand = Math.floor(50*Math.random())
let guess = prompt("please guess a number")
while (guess !== rand)
{
    if(rand>guess)
    {
        
        guess = prompt("The random number is: " + rand +" guess is too low, please choose a different number")
         rand = Math.floor(50*Math.random())
    }
    else 
    {
        guess = prompt("The random number is: " + rand + " guess is too high, please choose a different number")
        rand = Math.floor(50*Math.random())
    }
}