export default async function fetchPopularMovies() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzI3OWNlYTY0YzQzMTM3NjllOWQ0YTI4M2Q2ZDE0YSIsIm5iZiI6MTczMjEwMTAwMC42MjY1ODYsInN1YiI6IjY3MjRjMDM1YTQ5OWNjMmVmNzA1MDFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gsPQH0ZHA1yJQs6XcAAxNXWXEGtMZDxN5Aez6-h5RUk",
    },
  };
  try {
    //FETCHING MOVIES DATA FROM TMDB API
    const response = await fetch(url, options);
    //CONVERTING PARSED DATA INTO JSON
    const data = await response.json();
    //EXTRACTING DATA ARRAY FROM MOVIES OBJECT
    const popularMoviesData = data.results;
    console.log("popular:", popularMoviesData);
    return popularMoviesData;
  } catch (err) {
    throw err;
  }
}
