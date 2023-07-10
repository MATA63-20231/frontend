import { RouteGeneralRules, RouteUserRules } from "../enums/RouteAuthRules.tsx";

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

export interface IRouteGeneralRules {
  rule: RouteGeneralRules;
  redirectTo?: string;
}

export interface IRouteUserRules {
  rule: RouteUserRules;
  userId: string;
  redirectTo: string;
}

export type IRouteAuthRules = IRouteGeneralRules | IRouteUserRules;
