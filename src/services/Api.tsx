import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { IRecipe, IRecipeCreate } from "../interfaces/interfaces.tsx";

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
  onSuccess: (data?: DataType) => void;
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

function POST<DataType, BodyType>({
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
    path: "/receitas",
    setLoading,
    onSuccess: (data) => setRecipes(data),
  });
};

export const getRecipeDetails = () => {
  return api.get<IRecipe>("/receita");
};

export const createRecipe = (
  recipe: IRecipeCreate,
  setLoading: (loading: boolean) => void
) => {
  POST<IRecipe, IRecipeCreate>({
    path: "/receita",
    body: recipe,
    setLoading,
    onSuccess: (data) => {
      console.log(data); // eslint-disable-line no-console
    },
  });
};
