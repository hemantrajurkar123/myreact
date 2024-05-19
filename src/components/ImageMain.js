import React from "react";
import SearchBar from "./SearchBar";
import searchImages from "../api";
import { useState, useEffect } from "react";
import ImageList from "./ImageList";

const ImageMain = () => {
  const [images, setImages] = useState([]);
  const handleSubmit = async (searchText) => {
    const result = await searchImages(searchText);
    setImages(result);
  };
  useEffect(() => {
    console.log("Images", images);
  }, [images]);
  return (
    <div>
      <h3>Image Search...</h3>
      <SearchBar handleSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default ImageMain;
