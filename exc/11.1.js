const videoReleases = [
  { id: 111, name: "Movie 1", date: "2023-01-01" },
  { id: 222, name: "Movie 2", date: "2023-02-01" },
  { id: 333, name: "Movie 3", date: "2023-03-01" },
  // ... other objects
];

// 1. Create a function that will loop over the array with the
// forEach method. Return from the function an array of
// objects. Each object will contain the id and name of the
// specific movie.

function extractIdAndNameForEach() {
  const newArr = [];
  videoReleases.forEach((ele) => {
    newArr.push({ id: ele.id, name: ele.name });
  });
  return newArr;
}

console.log(extractIdAndNameForEach());
// 2. Create another function that will do the same thing except
// now use the map method.

function useMapFunction(arr) {
  
  return arr.map((ele)=>({ id: ele.id, name: ele.name }))
  
}
console.log(useMapFunction(videoReleases))