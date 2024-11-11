import MovieCard from "./MovieCard";

function MoviesList(movies) {
  return (
    <div className="mx-4 grid grid-cols-4">
      {movies.map((movie) => {
        <MovieCard movie={movie} />;
      })}
    </div>
  );
}

export default MoviesList;
