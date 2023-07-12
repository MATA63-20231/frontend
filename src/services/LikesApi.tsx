import { Dispatch, SetStateAction } from "react";
import { ICurtida, IRecipe } from "../interfaces/RecipeInterfaces.tsx";
import { DELETE, POST } from "./Api.tsx";

const sendLike = (
  recipeId: string,
  setLoading: (loading: boolean) => void,
  setShouldReload: Dispatch<SetStateAction<boolean>>,
) => {
  POST<ICurtida, ICurtida>({
    path: `/curtida/${recipeId}`,
    body: { curtida: true },
    setLoading,
    onSuccess: () => {
      setShouldReload((shouldReload) => !shouldReload);
    },
  });
};

const sendDislike = (
  recipeId: string,
  setLoading: (loading: boolean) => void,
  setShouldReload: Dispatch<SetStateAction<boolean>>,
) => {
  POST<ICurtida, ICurtida>({
    path: `/curtida/${recipeId}`,
    body: { curtida: false },
    setLoading,
    onSuccess: () => {
      setShouldReload((shouldReload) => !shouldReload);
    },
  });
};

const deleteLike = (
  recipeId: string,
  setLoading: (loading: boolean) => void,
  setShouldReload: Dispatch<SetStateAction<boolean>>,
) => {
  DELETE<IRecipe>({
    path: `/curtida/${recipeId}`,
    setLoading,
    onSuccess: () => {
      setShouldReload((shouldReload) => !shouldReload);
    },
  });
};

export { sendLike, sendDislike, deleteLike };
