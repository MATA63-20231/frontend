import { Dispatch, SetStateAction } from "react";
import { enqueueSnackbar } from "notistack";
import { NavigateFunction } from "react-router-dom";
import { IRecipe, IRecipeCreation } from "../interfaces/interfaces.tsx";
import { GET, POST } from "./Api.tsx";

const getAllRecipes = (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setRecipes: Dispatch<SetStateAction<IRecipe[]>>,
) => {
  GET<IRecipe[]>({
    path: "/receita/all",
    setLoading,
    onSuccess: (data) => setRecipes(data),
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

export { getAllRecipes, createRecipe };
