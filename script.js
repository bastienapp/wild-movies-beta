function createMovieCard(movie) {

    const movieCard = document.createElement('li');
    movieCard.classList.add('movie-card');

    const movieTitle = document.createElement('h2');
    movieTitle.textContent = movie.title;

    const moviePoster = document.createElement('img');
    moviePoster.alt = movie.title;
    moviePoster.src = movie.poster;
    moviePoster.classList.add('movie-poster');

    const movieRelease = document.createElement('p');
    movieRelease.textContent = movie.releaseDate;

    movieCard.appendChild(movieTitle);
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieRelease);

    return movieCard;
}

const movies = [
    {
        title: 'La Reine des Neiges',
        poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_FMjpg_UX1000_.jpg',
        releaseDate: 2013
    },
    {
        title: 'OSS 117',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTBkNWZmMDctOWQ3OS00M2YzLTljMjgtY2RjODQ4ZDY2ZWMzXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_FMjpg_UX1000_.jpg',
        releaseDate: 2006
    }
];

const movieCards = movies.map((movie) => createMovieCard(movie));

const moviesContainer = document.querySelector('.movies-container');

for (let movieCard of movieCards) {
    moviesContainer.appendChild(movieCard);
}