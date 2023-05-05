import { Link, useParams } from "react-router-dom";
import { Animal } from "./Animal";
import { Navbar } from "../Navbar";
import { getLSData } from "../../services/getLSData";
import { IAnimal } from "../../models/IAnimal";
import { useState } from "react";
import { setToLS } from "../../services/DataToLS";

export const AnimalView = () => {
  const animalsLS = getLSData();

  const [animals, setAnimals] = useState<IAnimal[]>([...animalsLS]);

  const params = useParams();

  const clickedAnimal = animals.find(
    (animal) => animal.id.toString() === params.id
  );

  const setAnimal = () => {
    animals.map((animal) => {
      if (animal.id.toString() === params.id) {
        animal.isFed = true;
      } else {
        return;
      }
    });
    setAnimals([...animals]);
    setToLS([...animals]);
  };

  if (clickedAnimal === undefined) {
    return <p>test</p>;
  } else {
    return (
      <>
        <Navbar></Navbar>
        <Animal {...clickedAnimal}></Animal>
        <button onClick={setAnimal}>Feed</button>
      </>
    );
  }
};
