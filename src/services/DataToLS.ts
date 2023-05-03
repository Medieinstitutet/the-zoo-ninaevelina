import { getAnimalData } from "./getAnimalData";
import { IAnimal } from "../models/IAnimal";

export function setToLS (animals: IAnimal[]) {

    //let animals: IAnimal[] = [];
    localStorage.setItem("animals", JSON.stringify(animals) || "[]");

} 
    

    /*let animalsLS = localStorage.getItem("animals");

    if (animalsLS) {
        animals = JSON.parse(animalsLS);
    } else {
        await getAnimalData().then((response) => {
            animals = response;
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    return animals;*/
