import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export async function getAnimalData(): Promise<IAnimal[]> {
  try {
    const response = await axios.get(
      `https://animals.azurewebsites.net/api/animals`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("some message");
    return [];
  }
}
