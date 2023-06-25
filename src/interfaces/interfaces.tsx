export interface IRecipe {
  id: string;
  titulo: string;
  descricao: string;
  rendimento: string;
  tempoPreparo: string;
  imagem: string;
  dataCadastro: string;
  ingredientes: IIngredient[];
  listaPreparo: IEtapaPreparo[];
}

interface IIngredient {
  id: string;
  descricao: string;
  quantidade: string;
}

interface IEtapaPreparo {
  id: string;
  descricao: string;
  ordem: string;
}

