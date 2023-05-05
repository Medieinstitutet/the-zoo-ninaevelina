import { Navbar } from "../Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { useParams } from "react-router-dom";
import { getLSData } from "../../services/getLSData";

//  <div key={animal.id}>

export const Animal = (animal: IAnimal) => {
  return (
    <>
      <div>
        <h1>{animal.name}</h1>
        <img src={animal.imageUrl} />
        <p>{animal.latinName}</p>
        <p>{animal.yearOfBirth}</p>
        <p>{animal.medicine}</p>
        <p>{animal.longDescription}</p>
        <p>{animal.lastFed}</p>
      </div>
    </>
  );
};
