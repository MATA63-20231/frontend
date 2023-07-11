import { RouteGeneralRules, RouteUserRules } from "../enums/RouteAuthRules.tsx";
import { IUserBase } from "./UserInterfaces.tsx";

export interface ILogin {
  usuario: string;
  senha: string;
}

export interface ILoginResponse {
  signed: boolean;
  token: string;
}

export interface IUserRegister extends ILogin, IUserBase {
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
