import MovieCard from "./MovieCard";

function PopularMoviesList({ movies }) {
  return (
    <div className="mx-10 pb-4">
      <h2 className="my-10 text-4xl font-semibold">Popular 🌍 : </h2>
      <div className=" grid grid-cols-4 gap-10 max-md:grid-cols-1 max-lg:grid-cols-2 ">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default PopularMoviesList;
