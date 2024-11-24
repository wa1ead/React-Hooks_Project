import React from "react";

export default function Favourites() {
  //SAVING MOVIES FROM LOCALSTORAGE TO FAVOURITES VARIABLE
  const favouriteMovies = JSON.parse(localStorage.getItem("favouriteMovies"));
  console.log(favouriteMovies);

  if (!favouriteMovies) {
    return <h2>You have not add any Movie to favourites yet</h2>;
  }
  return (
    <div className="p-8 bg-blue-950 flex flex-col gap-6">
      <h1 className="font-bold text-4xl text-center text-gray-100 my-8 max-sm:font-semibold max-sm:text-xl">
        FAVOURITE MOVIES LIST⭐
      </h1>
      {favouriteMovies.map((fav) => (
        <div className="bg-white h-80 max-sm:min-h-[80vh] border rounded-xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden  sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs max-sm:h-60">
            <img
              className="size-full absolute top-0 start-0 object-cover"
              src={"https://image.tmdb.org/t/p/w500" + fav.poster_path}
              alt={fav.title}
            />
          </div>
          <div className="flex flex-wrap size-full">
            <div className="p-4 flex flex-col h-full sm:p-7">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {fav.title}
              </h3>
              <p className="mt-1 text-gray-500 dark:text-neutral-400">
                {fav.overview}
              </p>
              <div className="mt-5 sm:mt-auto">
                <p className="text-xs text-gray-500 dark:text-neutral-500">
                  Last updated 5 mins ago
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
