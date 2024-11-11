import MovieCard from "./MovieCard";

function MoviesList({ movies }) {
  return (
    <div className="m-4 grid grid-cols-4 gap-6 max-md:grid-cols-1 max-lg:grid-cols-2 my-8">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.title} />
      ))}
    </div>
  );
}

export default MoviesList;
