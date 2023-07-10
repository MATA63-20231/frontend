import { NavigateFunction } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import {
  ILogin,
  ILoginResponse,
  IUserRegister,
} from "../interfaces/AuthInterfaces.tsx";
import { POST, api } from "./Api.tsx";

export const signUp = (
  userData: IUserRegister,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void
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
  navigate: NavigateFunction,
  setSigned: (signed: boolean) => void,
  setLoading: (loading: boolean) => void
) => {
  const onSuccess = ({ token }: ILoginResponse) => {
    // TODO: Uncomment the below codes when token is returned by backend
    // if (token) {
    enqueueSnackbar({
      variant: "success",
      message: "Login efetuado com sucesso!",
    });

    setSigned(true);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    // TODO: Remove this ugly ternary when token is returned by backend
    localStorage.setItem("token", token ? token : "null");
    // localStorage.setItem("token", token);

    navigate("/");
    // } else {
    //  enqueueSnackbar({
    //    variant: "error",
    //  });
    // }
  };

  POST<ILoginResponse, ILogin>({
    path: "/usuario/authenticate",
    body: loginData,
    setLoading,
    onSuccess,
  });
};
