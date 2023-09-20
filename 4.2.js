
    // THIS IS FIRST LETTER THEN RANGE OF GRADE

    let reqLetter = prompt("please provide your grade, in the form of a letter");


    const uppercaseLetter = req.toUpperCase();
    console.log(reqLetter)
    console.log(typeof(reqLetter))


    if(reqLetter == "F")
    {
        console.log('the score is between 0-64')
    }
    else if (reqLetter == 'D')
    {
        console.log('the score is between 65-69')
    }
    else if (reqLetter == 'C')
    {
        console.log('the score is between 70-79')
    }
    else if (reqLetter == 'B')
    {
        console.log('the score is between 80-89')
    }
    else if (reqLetter == 'A')
    {
        console.log('the score is between 90-100')
    }
    else{
        console.log('score letter is invalid')
    }
        

    
    // THIS IS FIRST GRADE NUMBER THEN LETTER
    
    
    let reqNumber = prompt("please provide your grade, in the form of a letter");
    console.log(typeof(req))

    const uppercase = req.toUpperCase();
    console.log(uppercase);

    let numb = uppercase.match(/\d/g);
    numb = numb.join("");
    console.log(numb);

    if(numb>=0 && numb<=64)
    {
        console.log('the score is F')
    }
    else if (numb>=65 && numb<=69)
    {
        console.log('the score is D')
    }
    else if (numb>=70 && numb<=79)
    {
        console.log('the score is C')
    }
    else if (numb>=80 && numb<=89)
    {
        console.log('the score is F')
    }
    else if (numb>=90 && numb<=100)
    {
        console.log('the score is F')
    }
    else{
        console.log('score is invalid')
    }
    
    