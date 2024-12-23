// src/Filter.js
import React from 'react';

const Filter = ({ filters, handleFilterChange }) => {
  return (
    <div>
      <input
        type="text"
        name="title"
        value={filters.title}
        placeholder="Filter by title"
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="rating"
        value={filters.rating}
        placeholder="Filter by rating"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;  // Ensure default export is used here
