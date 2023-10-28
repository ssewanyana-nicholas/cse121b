// DOM elements
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
        // Fetching data from movies.json (simulated API call)
        fetch('movies.json')
            .then(response => response.json())
            .then(data => {
                // Find movies containing the search term in their title
                const foundMovies = data.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
                displaySearchResults(foundMovies);
            })
            .catch(error => console.error('Error fetching data:', error));
    }
});

// Function to display search results
function displaySearchResults(movies) {
    resultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = createMovieCard(movie);
        resultsContainer.appendChild(movieElement);
    });
}

// Function to create a movie card
function createMovieCard(movie) {
    const { title, year, thumbnail } = movie;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-card');
    movieElement.innerHTML = `
    <img src="${thumbnail}" alt="${title}">
    <h3>${title} (${year})</h3>
  `;

    movieElement.addEventListener('click', () => {
        displayMovieDetails(movie);
    });

    return movieElement;
}

// Function to display movie details
function displayMovieDetails(movie) {
    const { title, year, cast, genres, thumbnail, thumbnail_width, thumbnail_height, extract } = movie;

    const castList = cast.map(actor => `<li>${actor}</li>`).join('');
    const genreList = genres.map(genre => `<li>${genre}</li>`).join('');

    const movieDetailsHTML = `
      <div class="movie-info">
        <h2>${title} (${year})</h2>
        <img src="${thumbnail}" alt="${title}" width="${thumbnail_width}" height="${thumbnail_height}">
        <h3>Cast:</h3>
        <ul>${castList}</ul>
        <h3>Genres:</h3>
        <ul>${genreList}</ul>
        <p>${extract}</p>
      </div>
    `;

    detailsContainer.innerHTML = movieDetailsHTML;
}
