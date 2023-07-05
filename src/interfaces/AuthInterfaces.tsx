export interface ILoginData {
  usuario: string;
  senha: string;
}

export interface IRegister extends ILoginData {
  nome: string;
  email: string;
  confirmacaoSenha: string;
}
