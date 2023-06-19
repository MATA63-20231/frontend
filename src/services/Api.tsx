import axios from "axios";
import { IRecipe } from "../interfaces/interfaces.tsx";

const api = axios.create({
  baseURL: "https://chef-virtual.onrender.com/",
});

export const getRecipeDetails = () => {
  return api.get<IRecipe>("/receita");
};

export default api;
