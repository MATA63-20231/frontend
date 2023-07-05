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
  imagens: string[];
  rendimento: number;
  tempoPreparo: ITempoPreparo;
  ingredientes: IIngrediente[];
  listaPreparo: IItemPreparo[];
}

export interface IRecipe extends IRecipeCreation {
  id: string;
  dataCadastro: string;
}

export interface IRecipePostResponse {
  receita: IRecipe;
}
