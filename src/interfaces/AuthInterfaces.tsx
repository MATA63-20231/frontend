export interface ILogin {
  usuario: string;
  senha: string;
}

export interface ILoginResponse {
  signed: boolean;
  token: string;
}

export interface IUserRegister extends ILogin {
  nome: string;
  email: string;
  confirmacaoSenha: string;
}
