export interface IRecipe {
  id: string;
  titulo: string;
  descricao: string;
  rendimento: string;
  tempoPreparo: string;
  imagem: string;
  dataCadastro: string;
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
