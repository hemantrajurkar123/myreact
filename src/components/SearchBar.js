import React from "react";
import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [imageSearch, setImageSearch] = useState("");

  const submitFunction = (e) => {
    e.preventDefault();
    handleSubmit(imageSearch);
  };
  return (
    <div>
      <input
        value={imageSearch}
        type="text"
        onChange={(e) => setImageSearch(e.target.value)}
      ></input>
      <button onClick={submitFunction}>Search Images</button>
    </div>
  );
};

export default SearchBar;
