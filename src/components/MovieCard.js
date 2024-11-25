import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const [clickTimeout, setClickTimeout] = useState(null);

  const handleClick = (e) => {
    if (clickTimeout) {
      // If a second click happens within the timeout, it's a double-click
      clearTimeout(clickTimeout); // Clear the single-click timeout
      setClickTimeout(null); // Reset the timeout state

      // Save the movie details to localStorage
      const favouriteMovies =
        JSON.parse(localStorage.getItem("favouriteMovies")) || [];
      const movieExists = favouriteMovies.find(
        (favouriteMovie) => favouriteMovie.id === movie.id
      );

      if (!movieExists) {
        favouriteMovies.push(movie);
        localStorage.setItem(
          "favouriteMovies",
          JSON.stringify(favouriteMovies)
        );
        toast.success("Movie added to favourites!");
      } else {
        toast("Movie already exists in favourites ", {
          icon: "⭐",
        });
      }
    } else {
      // Set a timeout for single-click detection
      const timeout = setTimeout(() => {
        navigate(`/description/${movie.id}`);
        setClickTimeout(null); // Reset the timeout state after execution
      }, 200);
      setClickTimeout(timeout); // Save the timeout ID to state
    }
  };
  return (
    <button onClick={handleClick}>
      <div
        className="flex flex-col bg-white border shadow-sm rounded-xl h-[80vh] max-md:m-auto max-md:w-[80%] max-md:mt-8 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 transition ease-in-out transform hover:scale-110 hover:translate-y-1 duration-300"
        key={movie.id}
      >
        <img
          className="w-full h-60 rounded-t-xl"
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
        />
        <div className="p-4 flex flex-col h-[200px] overflow-y-clip md:p-5">
          <h3 className="text-md font-bold text-gray-800 dark:text-white">
            {movie.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400 ">
            {movie.overview}
          </p>
        </div>
        <div className="p-4">
          <p className="mt-1 text-yellow-400">
            ⭐Rating: <b>{movie.vote_average.toFixed(1)}</b>
          </p>
        </div>
      </div>
    </button>
  );
}

export default MovieCard;
