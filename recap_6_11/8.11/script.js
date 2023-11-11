const movies = [
    {
id: 1,
title: "The Shawshank Redemption",
genre: "Drama",
director: "Frank Darabont",
releaseYear: 1994,
rating: 9.3,
votes: 2345890,
img: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
},
{
id: 2,
title: "The Godfather",
genre: "Crime, Drama",
director: "Francis Ford Coppola",
releaseYear: 1972,
rating: 9.2,
votes: 1620360,
img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"

},
{
id: 3,
title: "The Godfather: Part II",
genre: "Crime, Drama",
director: "Francis Ford Coppola",
releaseYear: 1974,
rating: 9.0,
votes: 1133175,
img: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
},
{
id: 4,
title: "The Dark Knight",
genre: "Action, Crime, Drama",
director: "Christopher Nolan",
releaseYear: 2008,
rating: 9.0,
votes: 2303232,
img:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
},
{
id: 5,
title: "12 Angry Men",
genre: "Crime, Drama",
director: "Sidney Lumet",
releaseYear: 1957,
rating: 9.0,
votes: 689845,
img:"https://m.media-amazon.com/images/S/pv-target-images/b92d2865829416e35e7102a3934a2ee745f3b903a95678710442d4299d86f39c.jpg"
},
    ];

const container = document.getElementById("cards-container");

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.classList.add("movie-card");
  card.innerHTML = `
        <h2>${movie.title}</h2>
        <p>Genre: ${movie.genre}</p>
        <p>Director: ${movie.director}</p>
        <p>Release Year: ${movie.releaseYear}</p>
        <p>Rating: ${movie.rating}</p>
        <p>Votes: ${movie.votes}</p>
        <img src=${movie.img}>
    `;
  container.appendChild(card);
});

const filterContainer = document.getElementById("filter-container");



