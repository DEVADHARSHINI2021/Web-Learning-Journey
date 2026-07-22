const input = document.getElementById("movieInput");
const button = document.getElementById("searchBtn");
const moviesDiv = document.getElementById("movies");

button.addEventListener("click", searchMovie);

async function searchMovie(){

const movie = input.value.trim();

if(movie===""){
alert("Enter a movie name");
return;
}

moviesDiv.innerHTML="<h2>Loading...</h2>";

try{

const response = await fetch(
`https://www.omdbapi.com/?apikey=564727fa&s=${movie}`
);

const data = await response.json();

moviesDiv.innerHTML="";

if(data.Response==="False"){
moviesDiv.innerHTML="<h2>No movies found.</h2>";
return;
}

data.Search.forEach(movie=>{

const card=document.createElement("div");

card.className="movie";

card.innerHTML=`

<img src="${movie.Poster}" alt="Poster">

<h3>${movie.Title}</h3>

<p>Year: ${movie.Year}</p>

`;

moviesDiv.appendChild(card);

});

}

catch(error){

moviesDiv.innerHTML="<h2>Something went wrong.</h2>";

console.log(error);

}

}