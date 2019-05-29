import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearchChange }) => {
  return (
    <input
      onChange={e => {onSearchChange(e)}}
      className="form-control"
      id="search"
      placeholder="Enter Search"
    />
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
};

export default SearchBar;
