import { IUser } from "./UserInterfaces.tsx";

export interface IRecipeFormFields {
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
  id?: string;
  descricao: string;
}

interface IItemPreparo {
  id?: string;
  descricao: string;
}

export interface ICurtida {
  curtida: boolean;
}

interface IComentario {
  comentario: string;
}

export interface IImage {
  id: string;
  nome: string;
}

export interface IImageCarousel {
  id: string;
  link: string;
  action?: JSX.Element;
}

interface IRecipeBase {
  titulo: string;
  descricao: string;
  rendimento: number;
  tempoPreparo: ITempoPreparo;
  ingredientes: IIngrediente[];
  listaPreparo: IItemPreparo[];
}

export interface IRecipeToBack extends IRecipeBase {
  imagens: File[];
}

export interface IRecipe extends IRecipeBase {
  id: string;
  dataCadastro: string;
  imagens: IImage[];
  usuario: IUser;
  curtidas: ICurtida[];
  comentarios: IComentario[];
}
