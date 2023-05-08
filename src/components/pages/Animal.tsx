import { Navbar } from "../Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { useParams } from "react-router-dom";
import { getLSData } from "../../services/getLSData";

export const Animal = (animal: IAnimal) => {
  return (
    <>
      <div className={animal.isFed ? "fed" : "hungry"}>
        <h1>{animal.name}</h1>
        <img src={animal.imageUrl} />
        <p>
          <strong>
            Latin name:<br></br>
          </strong>{" "}
          {animal.latinName}
        </p>
        <p>
          <strong>
            Year of Birth:<br></br>
          </strong>{" "}
          {animal.yearOfBirth}
        </p>
        <p>
          <strong>
            Medicine:<br></br>
          </strong>{" "}
          {animal.medicine}
        </p>
        <p>
          <strong>
            About:<br></br>
          </strong>{" "}
          {animal.longDescription}
        </p>
        <p>
          <strong>
            Last fed:<br></br>
          </strong>{" "}
          {animal.lastFed}
        </p>
      </div>
    </>
  );
};
