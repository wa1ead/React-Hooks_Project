export default async function fetchPopularMovies() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      //HIDING THE TOKEN INTO DOTENV FILE
      Authorization: process.env.REACT_APP_API_KEY,
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
