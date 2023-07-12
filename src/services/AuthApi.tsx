import { NavigateFunction } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import {
  ILogin,
  ILoginResponse,
  IUserRegister,
} from "../interfaces/AuthInterfaces.tsx";
import { POST } from "./Api.tsx";

export const signUp = (
  userData: IUserRegister,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void,
) => {
  POST<IUserRegister, IUserRegister>({
    path: "/usuario",
    body: userData,
    setLoading,
    onSuccess: () => {
      enqueueSnackbar({
        variant: "success",
        message: "Usuário cadastrado com sucesso!",
      });
      navigate("/login");
    },
  });
};

export const login = (
  loginData: ILogin,
  handleLogin: (loginRes: ILoginResponse) => void,
  setLoading: (loading: boolean) => void,
) => {
  const onSuccess = ({ token, usuario }: ILoginResponse) => {
    if (token && usuario) {
      enqueueSnackbar({
        variant: "success",
        message: "Login efetuado com sucesso!",
      });
      handleLogin({ token, usuario });
    } else {
      enqueueSnackbar({
        variant: "error",
      });
    }
  };

  POST<ILoginResponse, ILogin>({
    path: "/usuario/authenticate",
    body: loginData,
    setLoading,
    onSuccess,
  });
};
