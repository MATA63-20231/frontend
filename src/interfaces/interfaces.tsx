interface ITempoPreparo {
  horas: number;
  minutos: number;
}

interface IIngrediente {
  quantidade: number;
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
  listaPreparo: IItemPreparo[];
  ingredientes: IIngrediente[];
  imagem: string;
}

export interface IRecipe extends IRecipeCreation {
  id: string;
  dataCadastro: string;
}
