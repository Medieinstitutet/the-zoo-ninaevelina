import { Link, useParams } from "react-router-dom";
import { Animal } from "./Animal";
import { Navbar } from "../Navbar";
import { getLSData } from "../../services/getLSData";
import { IAnimal } from "../../models/IAnimal";
import { useState } from "react";
import { setToLS } from "../../services/DataToLS";
import "../../styles/AnimalView.scss";

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
        animal.lastFed = new Date().toLocaleString();
      } else {
        return;
      }
    });
    setAnimals([...animals]);
    setToLS([...animals]);
  };

  if (clickedAnimal === undefined) {
    return <p className="error">Woops, something went wrong!</p>;
  } else {
    return (
      <>
        <Navbar></Navbar>
        <div className="btn-container">
          <button onClick={setAnimal} disabled={clickedAnimal.isFed === true}>
            Feed
          </button>
        </div>
        <Animal {...clickedAnimal}></Animal>
      </>
    );
  }
};
