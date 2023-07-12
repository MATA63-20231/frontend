import { enqueueSnackbar } from "notistack";
import { NavigateFunction } from "react-router-dom";
import { IRecipe } from "../interfaces/RecipeInterfaces.tsx";
import { DELETE, GET, POST, PUT } from "./Api.tsx";

const getAllRecipes = (
  setLoading: (loading: boolean) => void,
  setRecipes: (recipes: IRecipe[]) => void
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
  setRecipe: (recipes: IRecipe) => void
) => {
  GET<IRecipe>({
    path: `/receita/${recipeId}`,
    setLoading,
    onSuccess: (data) => setRecipe(data),
    onError: () => {
      navigate("/");
    },
  });
};

const createRecipe = (
  recipe: FormData,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void
) => {
  POST<IRecipe, FormData>({
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
  recipe: FormData,
  recipeId: string,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void
) => {
  PUT<IRecipe, FormData>({
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

const deleteRecipe = (
  recipeId: string,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void
) => {
  DELETE<IRecipe>({
    path: `/receita/${recipeId}`,
    setLoading,
    onSuccess: () => {
      enqueueSnackbar({
        variant: "success",
        message: "Receita deletada com sucesso!",
      });
      navigate("/");
    },
    onError: () => {
      navigate("/");
    },
  });
};

export {
  getAllRecipes,
  getRecipeDetails,
  createRecipe,
  editRecipe,
  deleteRecipe,
};
