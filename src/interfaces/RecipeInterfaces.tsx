import { IInteractions } from "./InteractionsInterfaces.tsx";
import { IUser } from "./UserInterfaces.tsx";

export interface IRecipeCreationFormFields {
  title: string;
  description: string;
  servings: number | "";
  prepTime: {
    hours: number | "";
    minutes: number | "";
  };
  ingredients: string[];
  directions: string[];
  images: File[];
}

interface ITempoPreparo {
  horas: number;
  minutos: number;
}

interface IIngrediente {
  descricao: string;
  id?: string;
}

interface IItemPreparo {
  descricao: string;
  id?: string;
}

export interface IImage {
  id: string;
  ordem: number;
  nome: string;
}

interface IRecipeBase {
  titulo: string;
  descricao: string;
  rendimento: number;
  tempoPreparo: ITempoPreparo;
  ingredientes: IIngrediente[];
  listaPreparo: IItemPreparo[];
}
export interface IRecipeCreation extends IRecipeBase {
  imagens: File[];
}

export interface IRecipe extends IRecipeBase, IInteractions {
  id: string;
  dataCadastro: string;
  imagens: IImage[];
  usuario: IUser;
}
