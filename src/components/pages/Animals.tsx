import { getAnimalData } from "../../services/getAnimalData";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";
import { setToLS } from "../../services/DataToLS";
import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { getLSData } from "../../services/getLSData";
import axios from "axios";
import "../../styles/Animals.scss";


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
        //setToLS(animals);
    }
   }, []);



/*
   useEffect(() => {
    axios.get<IAnimal[]>("https://animals.azurewebsites.net/api/animals").then((response) => {
        setAnimals(response.data);
        let storedAnimals = setToLS();
        console.log(storedAnimals);
        console.log("ls", storedAnimals);

    });
   }, []);*/
/*
   useEffect(() => {
    console.log("test");
   }, [animals]);*/

   /*
     <div>
            {animals.map((animal) => {
                return <div key={animal.id} className="animal-card">
                    <h2>{animal.name}</h2>
                    <img src={animal.imageUrl}/>
                    <p>{animal.shortDescription}</p>
                    </div>;
            })}
         
        </div>
   */


    return (
        <>
        <Navbar></Navbar>
        <h1>The Zoo</h1>
        {animals.map((animal) => {
            return (
                <Link to={"/animal/" + animal.id} key={animal.id}>
                    <h2>{animal.name}</h2>
                    <img src={animal.imageUrl}/>
                    <p>{animal.shortDescription}</p>
                </Link>
            );
        })}
 
        
        </>
    );
};
