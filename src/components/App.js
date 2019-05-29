import React from "react";
import SearchResults from "../containers/SearchResults";
import SearchFilters from "./SearchFilters";
import SearchBarContainer from "../containers/SearchBarContainer";
import "./css/App.css";

const App = () => (
  <div>
    <SearchBarContainer />
    <SearchFilters />
    <SearchResults />
  </div>
);

export default App;
