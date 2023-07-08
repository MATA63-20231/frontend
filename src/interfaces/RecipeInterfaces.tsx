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
}

interface IItemPreparo {
  descricao: string;
}

export interface IRecipeCreation {
  titulo: string;
  descricao: string;
  rendimento: number;
  tempoPreparo: ITempoPreparo;
  ingredientes: IIngrediente[];
  listaPreparo: IItemPreparo[];
  imagens: File[];
}

export interface IRecipe extends IRecipeCreation {
  id: string;
  dataCadastro: string;
}
