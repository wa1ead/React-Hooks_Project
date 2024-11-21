import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/description/${movie.title}`}>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl h-[80vh] max-md:m-auto max-md:w-[80%] max-md:mt-8 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <img
          className="w-full h-60 rounded-t-xl"
          src={movie.poster_path}
          alt={movie.title}
        />
        <div className="p-4 flex flex-col md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {movie.title}
          </h3>
          <p className="mt-1 text-gray-500 dark:text-neutral-400 h-[150px] overflow-y-clip">
            {movie.overview}
          </p>
          <p className="mt-1 text-yellow-500">
            Rating: <b>{movie.vote_average.toFixed(1)}</b>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
