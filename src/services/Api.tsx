import axios from "axios";
import { IRecipe } from "../interfaces/interfaces";

const api = axios.create({
  baseURL: "https://chef-virtual.onrender.com/",
});

export const getRecipeDetails = () => {
    return api.get<IRecipe>(`/receita`);
  };
  