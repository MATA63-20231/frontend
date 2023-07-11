export interface IUserBase {
  nome: string;
  email: string;
}

export interface IUser extends IUserBase {
  usuario: string;
  id: string;
}
