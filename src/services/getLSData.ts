import { IAnimal } from "../models/IAnimal";

export function getLSData(): IAnimal[] {
  let storedAnimals = JSON.parse(localStorage.getItem("animals") || "[]");
  return storedAnimals;
}
