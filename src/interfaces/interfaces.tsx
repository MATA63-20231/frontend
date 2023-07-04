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
  listaPreparo: IItemPreparo[];
  ingredientes: IIngrediente[];
  imagem: string;
}

export interface IRecipe extends IRecipeCreation {
  id: string;
  dataCadastro: string;
}

export interface IRecipePostResponse {
  receita: IRecipe;
}

export interface ILoginData {
  usuario: string;
  senha: string;
}

export interface IUser {
  usuario: string;
  nome: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
}
