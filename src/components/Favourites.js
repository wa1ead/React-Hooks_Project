import React from "react";

export default function Favourites() {
  //SAVING MOVIES FROM LOCALSTORAGE TO FAVOURITES VARIABLE
  const favouriteMovies = JSON.parse(localStorage.getItem("favouriteMovies"));
  console.log(favouriteMovies);

  if (!favouriteMovies) {
    return <h2>You have not add any Movie to favourites yet</h2>;
  }
  return (
    <div>
      {favouriteMovies.map((fav) => (
        <div>
          <img
            src={"https://image.tmdb.org/t/p/w500" + fav.poster_path}
            alt={fav.title}
          />
          <h3>{fav.title}</h3>
          <p>{fav.overview}</p>
        </div>
      ))}
    </div>
  );
}
