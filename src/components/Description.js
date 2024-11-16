import { useParams } from "react-router-dom";

export default function Description({ movies }) {
  const { title } = useParams();
  console.log(title);
  const movie = movies.filter((movie) => movie.title === title);
  console.log(movie[0]);

  return (
    <div className="py-8 w-full h-[100vh] bg-blue-950 flex flex-col gap-8 overflow-hidden">
      <div className=" px-10 flex w-full justify-between">
        <h2 className="text-4xl font-bold text-gray-200">{movie[0].title}</h2>
        <p className="text-gray-400 font-medium text-md">
          <span className="text-lg text-yellow-300">
            <i class="fa-solid fa-star"></i>
          </span>{" "}
          <span className="text-white font-bold text-xl">
            {movie[0].rating}
          </span>
          <span>/10</span>
        </p>
      </div>
      <iframe
        width="100%"
        height="100%"
        src={`${movie[0].trailer}?autoplay=1&mute=1?controls=1`}
        title={movie[0].title}
      ></iframe>
      <p className="mx-6 ">
        <span className="font-light text-lg text-gray-300">Description: </span>
        <span className="text-gray-200 font-semibold text-lg ">
          {movie[0].description}
        </span>
      </p>
    </div>
  );
}
