import { NavigateFunction } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { ILoginData, IRegister } from "../interfaces/AuthInterfaces.js";
import { POST } from "./Api.js";

export const signUp = (
  userData: IRegister,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void,
) => {
  POST<IRegister, IRegister>({
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
  loginData: ILoginData,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void,
) => {
  POST<ILoginData, ILoginData>({
    path: "/usuario/authenticate",
    body: loginData,
    setLoading,
    onSuccess: () => {
      enqueueSnackbar({
        variant: "success",
        message: "Login efetuado com sucesso!",
      });
      localStorage.setItem("IsLogged", "true");
      navigate("/");
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    },
  });
};
