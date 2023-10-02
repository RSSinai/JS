const book1 = {
    pages: 455,
    name : "garry potta",
    theme: "sci fi",
    ending: "happy",
    author: "peta paka",
    publish_year: 2999
}

function returnBook(book)
{
    return console.log(`The book ${book.name} was written by ${book.author} in
    the year ${book.publish_year}`)
}

returnBook(book1)