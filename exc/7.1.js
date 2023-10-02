function remove(arr)
{
    let array = arr;
    array.sort()
    for(let i = array.length - 1; i > 0; i--)
    {
        if(array[i]==array[i-1])
        {
            array.splice(i, 1);
        }
    }
    return array
}
console.log(remove([3,4,4,3,6,7,3]))

