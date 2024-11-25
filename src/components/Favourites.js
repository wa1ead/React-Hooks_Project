import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Favourites() {
  const navigate = useNavigate();
  //SAVING MOVIES FROM LOCALSTORAGE TO FAVOURITES VARIABLE
  const favouriteMovies = JSON.parse(localStorage.getItem("favouriteMovies"));
  console.log(favouriteMovies);

  if (!favouriteMovies) {
    return <h2>You have not add any Movie to favourites yet</h2>;
  }
  return (
    <div className="p-8 bg-blue-950 flex flex-col gap-6">
      <button
        className="transition ease-in-out transform hover:scale-110 hover:translate-y-1 duration-300 self-start py-4 px-8 text-xl border-2 border-white rounded-full text-gray-100"
        onClick={() => navigate(-1)}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <h1 className="font-bold text-4xl text-center text-gray-100 mb-8 max-sm:font-semibold max-sm:text-xl">
        FAVOURITE MOVIES LIST⭐
      </h1>
      {favouriteMovies.map((fav) => (
        <Link to={`/description/${fav.id}`}>
          <div
            className="bg-white h-80 max-sm:min-h-[80vh] border rounded-xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 "
            key={fav.id}
          >
            <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden  sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs max-sm:h-60">
              <img
                className="size-full absolute top-0 start-0 object-cover"
                src={"https://image.tmdb.org/t/p/w500" + fav.poster_path}
                alt={fav.title}
              />
            </div>
            <div className="flex flex-wrap w-full ">
              <div className="p-4 flex flex-col h-full sm:p-7 ">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {fav.title}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400 overflow-clip max-sm:max-h-40">
                  {fav.overview}
                </p>
                <div className="mt-5 sm:mt-auto">
                  <p className="mt-1 text-yellow-400 ">
                    ⭐Rating: <b>{fav.vote_average.toFixed(1)}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
