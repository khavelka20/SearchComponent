import React from "react";

const SearchFilters = () => (
  <div className="search-filter-container">
    <small>
      <strong>Filter by </strong>
    </small>
    <button className="btn btn-light btn-sm">first:</button>
    <button className="btn btn-light btn-sm">last:</button>
    <button className="btn btn-light btn-sm">dob:</button>
    <button className="btn btn-light btn-sm">email:</button>
    <button className="btn btn-light btn-sm">phone:</button>
  </div>
);

export default SearchFilters;
