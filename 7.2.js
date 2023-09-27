
function repeating(string)
{
    let i=0;
    while ((i = string.indexOf("you", i)) != -1)
    {
        // Print out the index.
        console.log(i);
        i++;
    }
}
repeating("The more you know, the more you know that you don't know")



