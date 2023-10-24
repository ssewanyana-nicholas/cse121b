// TMDb API key
const tmdbApiKey = 'd7ef18f80dfcb38645a950e0b79ffb39';

//  DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');
const detailsContainer = document.getElementById('details-container');

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;

    // Clear previous search results
    resultsContainer.innerHTML = '';
    detailsContainer.innerHTML = '';

    if (searchTerm) {
        // Call the function to fetch movie data based on the search term
        fetchMovieData(searchTerm);
    }
});

// Function to fetch movie data from TMDb API
async function fetchMovieData(searchTerm) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${searchTerm}`);
    const data = await response.json();

    // Display search results in the resultsContainer
    data.results.forEach(movie => {
        const movieElement = createMovieCard(movie);
        resultsContainer.appendChild(movieElement);
    });
}

// Function to create a movie card
function createMovieCard(movie) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-card');
    movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
    `;
    movieElement.addEventListener('click', () => {
        const contentId = movie.id;
        displayMovieDetails(contentId);
    });
    return movieElement;
}

// Function to display movie details
async function displayMovieDetails(contentId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${contentId}?api_key=${tmdbApiKey}`);
    const details = await response.json();

    // Display movie details in the detailsContainer
    detailsContainer.innerHTML = `
        <h2>${details.title}</h2>
        <p>${details.overview}</p>
        <p>Released: ${details.release_date}</p>
        <p>Runtime: ${details.runtime} minutes</p>
    `;
}
