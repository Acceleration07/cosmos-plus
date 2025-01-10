window.addEventListener('load', () => console.log("Search Javascript Loaded"));

const movies = [
{
  title: "Pitch Perfect",
  releaseDate: "2012-09-28",
  rating: 7.3,
  banner: "movies/pitch-perfect/content/poster-mid.webp",
  link: "movies/pitch-perfect/splash.html"
},

{
  title: "Borderlands",
  releaseDate: "2024-08-07",
  rating: 5.8,
  banner: "movies/borderlands/content/poster-mid.webp",
  link: "movies/borderlands/splash.html"
},

{
  title: "Shutter Island",
  releaseDate: "2010-02-14",
  rating: 8.2,
  banner: "movies/shutter-island/content/poster-mid.webp",
  link: "movies/shutter-island/splash.html"
},

{
  title: "Kingsman The Secret Service",
  releaseDate: "2015-01-24",
  rating: 7.6,
  banner: "movies/kingsman-the-secret-service/content/poster-mid.webp",
  link: "movies/kingsman-the-secret-service/splash.html"
},

{
  title: "Lilo  Stitch",
  releaseDate: "2002-06-21",
  rating: 7.5,
  banner: "movies/lilo--stitch/content/poster-mid.webp",
  link: "movies/lilo--stitch/splash.html"
},

{
  title: "The Wild Robot",
  releaseDate: "2024-09-12",
  rating: 8.4,
  banner: "movies/the-wild-robot/content/poster-mid.webp",
  link: "movies/the-wild-robot/splash.html"
},

{
  title: "Cars",
  releaseDate: "2006-06-08",
  rating: 7.0,
  banner: "movies/cars/content/poster-mid.webp",
  link: "movies/cars/splash.html"
},

{
  title: "Coco",
  releaseDate: "2017-10-27",
  rating: 8.2,
  banner: "movies/coco/content/poster-mid.webp",
  link: "movies/coco/splash.html"
},

{
  title: "Wonka",
  releaseDate: "2023-12-06",
  rating: 7.1,
  banner: "movies/wonka/content/poster-mid.webp",
  link: "movies/wonka/splash.html"
},

{
  title: "TRON Legacy",
  releaseDate: "2010-12-14",
  rating: 6.5,
  banner: "movies/tron-legacy/content/poster-mid.webp",
  link: "movies/tron-legacy/splash.html"
},

{
  title: "Kung Fu Panda",
  releaseDate: "2008-06-04",
  rating: 7.3,
  banner: "movies/kung-fu-panda/content/poster-mid.webp",
  link: "movies/kung-fu-panda/splash.html"
},

{
  title: "Singin in the Rain",
  releaseDate: "1952-04-09",
  rating: 8.1,
  banner: "movies/singin-in-the-rain/content/poster-mid.webp",
  link: "movies/singin-in-the-rain/splash.html"
},	

{
  title: "How to Train Your Dragon",
  releaseDate: "2010-03-18",
  rating: 7.8,
  banner: "movies/how-to-train-your-dragon/content/poster-mid.webp",
  link: "movies/how-to-train-your-dragon/splash.html"
},

{
  title: "Catch Me If You Can",
  releaseDate: "2002-12-16",
  rating: 8.0,
  banner: "movies/catch-me-if-you-can/content/poster-mid.webp",
  link: "movies/catch-me-if-you-can/splash.html"
},

{
  title: "Big Hero 6",
  releaseDate: "2014-10-24",
  rating: 7.7,
  banner: "movies/big-hero-6/content/poster-mid.webp",
  link: "movies/big-hero-6/splash.html"
},

{
  title: "Tangled",
  releaseDate: "2010-11-24",
  rating: 7.6,
  banner: "movies/tangled/content/poster-mid.webp",
  link: "movies/tangled/splash.html"
},

{
  title: "Storks",
  releaseDate: "2016-09-22",
  rating: 6.7,
  banner: "movies/storks/content/poster-mid.webp",
  link: "movies/storks/splash.html"
},

{
  title: "Rango",
  releaseDate: "2011-03-02",
  rating: 6.9,
  banner: "movies/rango/content/poster-mid.webp",
  link: "movies/rango/splash.html"
},
];

let moviesPerPage = 36; // Number of movies to display per page
let currentPage = 1; // Current page number
const movieGrid = document.querySelector(".movie-grid");
const searchInput = document.querySelector("input[type='text']");
const sortSelect = document.querySelector("#sort");


// Sort movies alphabetically with numbers at the end
function sortMoviesAlphabetically() {
  movies.sort((a, b) => {
    if (isNumberStart(a.title) && !isNumberStart(b.title)) {
      return 1; // b comes before a
    } else if (!isNumberStart(a.title) && isNumberStart(b.title)) {
      return -1; // a comes before b
    } else {
      return a.title.localeCompare(b.title); // Sort alphabetically
    }
  });
}

// Check if a string starts with a number
function isNumberStart(title) {
  return /^\d/.test(title);
}

function displayMovies(movies, page) {
  movieGrid.innerHTML = "";
  const startIndex = (page - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  // Find the movie you want to display last
  const movieToDisplayLast = movies.find(movie => movie.title === "aaaaaaaainvnqeriqeijnidakj cwqd9-134-iuf13-iu13n-ifu13n4f-iun13i4nf1i3nf");

  // Create a new array without the movie to be displayed last
  const moviesWithoutLast = movies.filter(movie => movie !== movieToDisplayLast);

  const modifiedMovies = moviesWithoutLast.slice(startIndex, endIndex - 1); // Display all but the last movie
  modifiedMovies.push(movieToDisplayLast); // Add the chosen movie as the last one

  modifiedMovies.forEach(movie => {
    const movieBanner = document.createElement("a");
    movieBanner.href = movie.link;
    movieBanner.classList.add("movie-banner");
    movieBanner.style.backgroundImage = `url(${movie.banner})`;

    if (movie === movieToDisplayLast) {
      movieBanner.id = "loadMore"; // Set the id for the chosen movie
      movieBanner.addEventListener("click", () => {
        // Handle the "loadMore" click event here
        moviesPerPage += 18;
        console.log("18 more movies loaded");
        displayMovies(movies, currentPage);
      });
    }

    movieGrid.appendChild(movieBanner);
  });
}



function sortMovies(sortBy) {
  switch (sortBy) {
    case "title":
      sortMoviesAlphabetically();
      break;
    case "year":
      movies.sort((a, b) => {
        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);

        if (dateA.getTime() === dateB.getTime()) {
          return a.title.localeCompare(b.title);
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      });
      break;
    case "release_date":
      movies.sort((a, b) => {
        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);

        if (dateA.getTime() === dateB.getTime()) {
          return a.title.localeCompare(b.title);
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      });
      break;
    case "rating":
      movies.sort((a, b) => {
        if (a.rating === b.rating) {
          return a.title.localeCompare(b.title);
        } else {
          return b.rating - a.rating;
        }
      });
      break;
    default:
      break;
  }
  displayMovies(movies, currentPage);
}


sortSelect.addEventListener("change", (event) => {
  const selectedSortOption = event.target.value;
  sortMovies(selectedSortOption); // Call the sorting function with the selected option
  filterMovies(searchInput.value); // Reapply the filter based on the current search term
});

function filterMovies(searchTerm) {
  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  displayMovies(filteredMovies, currentPage); // Display filtered movies on the current page
}

function initializePage() {
  sortMovies("release_date");
  displayMovies(movies, currentPage);
  filterMovies("");
}

window.addEventListener('load', initializePage);

searchInput.addEventListener("input", () => {
  filterMovies(searchInput.value);
});

sortSelect.addEventListener("change", () => {
  sortMovies(sortSelect.value);
});


