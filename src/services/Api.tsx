import axios from "axios";
import { IRecipe } from "../interfaces/interfaces.tsx";

// interface IGet {
//   path: string;
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
//   onSuccess: (data) => void;
//   onError?: () => void;
//   onFinish?: () => void;
// }

interface IRequest {
  baseRequest: any;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onError?: () => void;
  onFinish?: () => void;
}

const api = axios.create({
  baseURL: "https://chef-virtual.onrender.com/",
});

// const GET = ({ path, setLoading, onSuccess, onError, onFinish }: IGet) => {
//   setLoading(true);
//   api
//     .get(path)
//     .then(({ data }) => {
//       onSuccess(data);
//     })
//     .catch(() => {
//       onError?.();
//     })
//     .finally(() => {
//       onFinish?.();
//       setLoading(false);
//     });
// };

const request = ({ baseRequest, setLoading, onError, onFinish }: IRequest) => {
  setLoading(true);
  baseRequest
    .catch(() => {
      onError?.();
    })
    .finally(() => {
      onFinish?.();
      setLoading(false);
    });
};

export const getRecipes = (setLoading: any, setRecipes: any) => {
  request({
    setLoading,
    baseRequest: api.get<IRecipe[]>("/receitas").then(({ data }) => {
      console.log(data);
      setRecipes(data);
    }),
  });
};

export const getRecipeDetails = () => {
  return api.get<IRecipe>("/receita");
};

export default api;
