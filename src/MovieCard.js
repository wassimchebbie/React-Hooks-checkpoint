// src/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
