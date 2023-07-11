import { enqueueSnackbar } from "notistack";
import { NavigateFunction } from "react-router-dom";
import {
  IRecipe,
  IRecipeCreation,
  IRecipeRead,
} from "../interfaces/RecipeInterfaces.tsx";
import { GET, POST, PUT } from "./Api.tsx";

const getAllRecipes = (
  setLoading: (loading: boolean) => void,
  setRecipes: (recipes: IRecipe[]) => void,
) => {
  GET<IRecipe[]>({
    path: "/receita/all",
    setLoading,
    onSuccess: (data) => setRecipes(data),
  });
};

const getRecipeDetails = (
  recipeId: string,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void,
  setRecipe: (recipes: IRecipeRead) => void,
) => {
  GET<IRecipeRead>({
    path: `/receita/${recipeId}`,
    setLoading,
    onSuccess: (data) => setRecipe(data),
    onError: () => { navigate("/"); },
  });
};

const createRecipe = (
  recipe: IRecipeCreation,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void,
) => {
  POST<IRecipe, IRecipeCreation>({
    path: "/receita",
    body: recipe,
    setLoading,
    onSuccess: ({ id }) => {
      enqueueSnackbar({
        variant: "success",
        message: "Receita cadastrada com sucesso!",
      });
      navigate(`/receita/${id}`);
    },
  });
};

const editRecipe = (
  recipe: IRecipeCreation,
  recipeId: string,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void,
) => {
  PUT<IRecipe, IRecipeCreation>({
    path: `/receita/${recipeId}`,
    body: recipe,
    setLoading,
    onSuccess: ({ id }) => {
      enqueueSnackbar({
        variant: "success",
        message: "Receita editada com sucesso!",
      });
      navigate(`/receita/${id}`);
    },
  });
};


export { getAllRecipes, getRecipeDetails, createRecipe, editRecipe };
