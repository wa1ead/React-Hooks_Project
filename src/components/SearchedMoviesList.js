import MovieCard from "./MovieCard";

function SearchedMoviesList({ movies, title }) {
  return (
    <div className="mx-16 pb-4">
      <h2 className="my-10 text-3xl font-semibold text-blue-950">
        {title}🎬 :{" "}
      </h2>
      <div className=" grid grid-cols-4 gap-16 max-md:grid-cols-1 max-lg:grid-cols-2 ">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default SearchedMoviesList;
