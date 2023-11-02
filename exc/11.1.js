// You are getting an array of objects of the recent video releases
// from your database. (array below). We only care about the
// portion of data we are getting.

const videoReleases = [
    { id: 1, name: "Movie 1", date: "2023-01-01" },
    { id: 2, name: "Movie 2", date: "2023-02-01" },
    { id: 3, name: "Movie 3", date: "2023-03-01" },
    // ... other objects
  ];

// 1. Create a function that will loop over the array with the
// forEach method. Return from the function an array of
// objects. Each object will contain the id and name of the
// specific movie.

newArray =videoReleases.forEach((ele)=>console.log(ele.name +" "+ ele.id))
console.log(newArray)

// 2. Create another function that will do the same thing except
// now use the map method.