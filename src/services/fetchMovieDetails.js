import axios from "axios";

export default async function fetchMovieDetails({ id }) {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      //HIDING THE TOKEN INTO DOTENV FILE
      Authorization: process.env.REACT_APP_API_KEY,
    },
  };

  try {
    //SENDING GET REQUEST TO TMDB API TO FETCH SELECTED MOVIE DATA
    const response = await axios.get(url, config);
    //STORING MOVIE DATE INTO A VARIABLE
    const movieData = response.data;
    console.log("Movie Data:", movieData);
    //RETURNING VARIABLE DATA
    return movieData;
  } catch (err) {
    console.error("Error fetching movie data:", err);
    throw err;
  }
}
