/* eslint-disable react-refresh/only-export-components */

import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { IRecipe } from "../interfaces/interfaces.tsx";

interface IGet<DataType> {
  path: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  onSuccess: (data: DataType) => void;
  onError?: () => void;
  onFinish?: () => void;
}

const api = axios.create({
  baseURL: "https://chef-virtual.onrender.com/",
});

function GET<DataType>({
  path,
  setLoading,
  onSuccess,
  onError,
  onFinish,
}: IGet<DataType>) {
  setLoading(true);
  api
    .get<DataType>(path)
    .then(({ data }) => {
      onSuccess(data);
    })
    .catch(() => {
      onError?.();
    })
    .finally(() => {
      onFinish?.();
      setLoading(false);
    });
}

export const getAllRecipes = (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setRecipes: Dispatch<SetStateAction<IRecipe[]>>
) => {
  GET<IRecipe[]>({
    path: "/receita/all",
    setLoading,
    onSuccess: (data) => setRecipes(data),
  });
};

export const getRecipeDetails = () => {
  return api.get<IRecipe>("/receita");
};
