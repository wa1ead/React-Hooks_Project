import React from "react";

export default function Description({ movie }) {
  return (
    <div>
      <embed src={movie.trailer} />
      <p>{movie.description}</p>
    </div>
  );
}
