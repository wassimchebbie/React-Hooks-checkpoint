// src/App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', posterURL: 'https://via.placeholder.com/150', rating: 9.0 },
    { title: 'The Dark Knight', description: 'A superhero film', posterURL: 'https://via.placeholder.com/150', rating: 9.1 },
  ]);

  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });
  const [filters, setFilters] = useState({ title: '', rating: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
    (filters.rating ? movie.rating >= filters.rating : true)
  );

  return (
    <div>
      <h1>Movie App</h1>

      <Filter filters={filters} handleFilterChange={handleFilterChange} />
      
      <div>
        <h3>Add a new movie</h3>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={newMovie.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="text"
          name="posterURL"
          value={newMovie.posterURL}
          placeholder="Poster URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          value={newMovie.rating}
          placeholder="Rating"
          onChange={handleChange}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
