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
  /*
  const updateTime = () => {
    
  }*/

  const updateHungerStatus = () => {
    animals.map((animal) => {
      if (animal.id.toString() === params.id) {
        // animal.lastFed = Date.now.toString();
        let time = Date.now() - new Date(animal.lastFed).getTime();
        console.log(time.toString());
        console.log(animal.lastFed);
      }
      if (animal.isFed == true) {
        //animal.lastFed = new Date().toUTCString();
        animal.lastFed = new Date().toLocaleString();
        console.log("animal was fed", animal.isFed);
      }
      let button = <button onClick={setAnimal}>Feed</button>;
      if (animal.isFed == true) {
        button = <button disabled>Feed</button>;
      }
      return <>{button}</>;
    });

    setAnimals([...animals]);
    setToLS([...animals]);
  };

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

  //let time = Date.now() - new Date(clickedAnimal.lastFed).getTime();

  if (clickedAnimal === undefined) {
    return <p>test</p>;
  } else {
    return (
      <>
        <Navbar></Navbar>
        <Animal {...clickedAnimal}></Animal>
        <button onClick={setAnimal}>Feed</button>
        <button onClick={updateHungerStatus}>Test</button>
      </>
    );
  }
};
