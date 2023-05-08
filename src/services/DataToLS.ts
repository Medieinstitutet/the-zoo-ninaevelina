import { getAnimalData } from "./getAnimalData";
import { IAnimal } from "../models/IAnimal";

export function setToLS(animals: IAnimal[]) {
  localStorage.setItem("animals", JSON.stringify(animals) || "[]");
}
