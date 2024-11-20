import { useParams, useNavigate } from "react-router-dom";
const movies = require("../Movies.json");

export default function Description() {
  const { title } = useParams();
  const navigate = useNavigate();
  console.log(title);
  const movie = movies.filter((movie) => movie.title === title);
  console.log(movie[0]);

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
          className="w-full h-full rounded-lg"
          src={`${movie[0].trailer}?autoplay=1&mute=1?controls=1`}
          title={movie[0].title}
        ></iframe>
        <p className="mx-6 ">
          <span className="font-light text-lg text-gray-300">
            Description:{" "}
          </span>
          <span className="text-gray-200 font-semibold text-lg ">
            {movie[0].description}
          </span>
        </p>
      </div>
    </div>
  );
}
