import axios from "axios";
export default async function fetchMovieDetails({ id }) {
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const config = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzI3OWNlYTY0YzQzMTM3NjllOWQ0YTI4M2Q2ZDE0YSIsIm5iZiI6MTczMjEwMTAwMC42MjY1ODYsInN1YiI6IjY3MjRjMDM1YTQ5OWNjMmVmNzA1MDFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gsPQH0ZHA1yJQs6XcAAxNXWXEGtMZDxN5Aez6-h5RUk",
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
