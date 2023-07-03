/* eslint-disable react-refresh/only-export-components */

import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { ILoginData, IRecipe, IUser } from "../interfaces/interfaces.tsx";
// import { enqueueSnackbar } from "notistack";
import { NavigateFunction } from "react-router-dom";

interface IGet<DataType> {
  path: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  onSuccess: (data: DataType) => void;
  onError?: () => void;
  onFinish?: () => void;
}
interface IPost<DataType, BodyType> {
  path: string;
  body: BodyType;
  setLoading: (loading: boolean) => void;
  onSuccess: (data: DataType) => void;
  onError?: () => void;
  onFinish?: () => void;
}

export const api = axios.create({
  baseURL: "https://chef-virtual.onrender.com/",
});

export function GET<DataType>({
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

export function POST<DataType, BodyType>({
  path,
  body,
  setLoading,
  onSuccess,
  onError,
  onFinish,
}: IPost<DataType, BodyType>) {
  setLoading(true);
  api
    .post<DataType>(path, body)
    .then(({ data }) => {
      onSuccess(data);
    })
    .catch(() => {
      onError
      //   ? onError()
      //   : enqueueSnackbar({
      //       variant: "error",
      //     });
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
