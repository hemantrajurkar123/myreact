import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const animalsList = ["cat", "dog", "lion", "rabbit", "cow"];

  const getRandomAnimal = () => {
    return animalsList[Math.floor(Math.random() * animals.length)];
  };

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  // This is a new approach. Directly return the component and save it into the variable
  const renderAnimals= animals.map((animal,index)=>{
    return <AnimalShow type={animal} key={index} />
  })

  return (
    <>
      <h4>Show Animals</h4>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderAnimals}</div>
    </>
  );
};

export default Animals;
