import { RouteGeneralRules, RouteUserRules } from "../enums/RouteAuthRules.tsx";
import { IUser } from "./UserInterfaces.tsx";

export interface ILogin {
  usuario: string;
  senha: string;
}

export interface ILoginResponse {
  token: string;
  usuario: IUser;
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
