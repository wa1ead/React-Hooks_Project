import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fetchMovieDetails from "../services/fetchMovieDetails";

export default function Description() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  console.log(id);

  useEffect(() => {
    async function fetchMovie() {
      try {
        //SETTING DATA COMMING FROM FETCH FUNCTION INTO VARIABLE
        const movieData = await fetchMovieDetails({ id });
        //SETTING THE DATA VARIABLE INTO MOVIE STATE
        setMovie(movieData);
      } catch (err) {
        console.error("Error: ", err);
        throw err;
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);
  console.log(movie);

  if (loading) {
    return <p>...!</p>;
  }
  return (
    <div className="px-8 bg-blue-950">
      <button
        className="my-4 self-start py-4 px-8 text-xl border-2 border-white rounded-full text-gray-100 hover:border-none"
        onClick={() => navigate("/")}
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <div className="w-full h-[100vh] my-4 flex flex-col gap-8 overflow-hidden">
        <div className="flex w-full justify-between px-2">
          <h2 className="text-4xl font-bold text-gray-200">
            {movie.original_title}
          </h2>
          <p className="text-gray-400 font-medium text-md">
            <span className="text-lg text-yellow-300">
              <i class="fa-solid fa-star"></i>
            </span>{" "}
            <span className="text-white font-bold text-xl">
              {movie.vote_average.toFixed(1)}
            </span>
            <span>/10</span>
          </p>
        </div>
        <img
          className="w-full h-full rounded-lg"
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.original_title}
        />
        <p className="mx-6 ">
          <span className="font-light text-lg text-gray-300">
            Description:{" "}
          </span>
          <span className="text-gray-200 font-semibold text-lg ">
            {movie.overview}
          </span>
        </p>
      </div>
    </div>
  );
}
