// create 2 book objects with properties: name, author, year.
let book1 = {
    name:"",
    author:"",
    year:null
}
let book2 = {
    name:"",
    author:"",
    year:null
}

let bookUtils = {
    getFirstPublished: function(obj1,obj2){
        return obj1 < obj2 ? obj1 : obj2 
    },
    setNewEdition: function(book1, year){
    if(book1.lastEdition != null)
    {
        return book1.lastEdition = year
    }
    else
    {
        return book1.lastEdition = year
    }
    },
    setTranslation: function(book,language,translator ){
        return book.translation = {language,translator }
    },
    setPublisher: function(book, name,location){
        return book.publisher = {name, location}
    },
    isSamePublisher: function(book1,book2){
        if(book1.publisher === book2.publisher )
        {
            return console.log("same ids")
        }
    }
        
    }


console.log(book1)
bookUtils.setNewEdition(book1,1991)
console.log(book1)
bookUtils.setTranslation(book1,"spanish", "rony")
console.log(book1)
bookUtils.setPublisher(book1,"io","greece")
bookUtils.setPublisher(book2,"io","greece")
console.log(book1)
console.log(book2)
bookUtils.isSamePublisher()






