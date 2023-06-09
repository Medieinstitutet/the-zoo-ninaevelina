import { getAnimalData } from "../../services/getAnimalData";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";
import { setToLS } from "../../services/DataToLS";
import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { getLSData } from "../../services/getLSData";
import "../../styles/Animals.scss";
import "../../styles/AnimalView.scss";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    let animalsLS = getLSData();

    if (animalsLS.length !== 0) {
      setAnimals(animalsLS);
    } else {
      getAnimalData().then((animals) => {
        setToLS(animals);
        setAnimals(animals);
      });
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <h1>The Zoo</h1>
      <div className="animals">
        {animals.map((animal, index) => {
          return (
            <Link
              to={animal.id.toString()}
              key={index.toString()}
              className="animals__animal-card"
            >
              <div className="animals__animal-content">
                <h2>{animal.name}</h2>
                <img src={animal.imageUrl} />
                <p>{animal.shortDescription}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
