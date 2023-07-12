import { ICurtida, IRecipe } from "../interfaces/RecipeInterfaces.js";
import { DELETE, POST } from "./Api.js";

const sendLike = (recipeId: string, setLoading: (loading: boolean) => void) => {
  POST<ICurtida, ICurtida>({
    path: `/curtida/${recipeId}`,
    body: { curtida: true },
    setLoading,
    onSuccess: () => {
      // TODO
    },
  });
};

const sendDislike = (
  recipeId: string,
  setLoading: (loading: boolean) => void
) => {
  POST<ICurtida, ICurtida>({
    path: `/curtida/${recipeId}`,
    body: { curtida: false },
    setLoading,
    onSuccess: () => {
      // TODO
    },
  });
};

const deleteLike = (
  recipeId: string,
  setLoading: (loading: boolean) => void
) => {
  DELETE<IRecipe>({
    path: `/curtida/${recipeId}`,
    setLoading,
    onSuccess: () => {
      // TODO
    },
  });
};

export { sendLike, sendDislike, deleteLike };
