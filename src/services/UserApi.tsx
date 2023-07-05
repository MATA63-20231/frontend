import { NavigateFunction } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { ILoginData, IRegister } from "../interfaces/interfaces.tsx";
import { POST } from "./Api.tsx";

export const postSignUp = (
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
    // TODO: mensagem de erro
  });
};

export const postLogin = (
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
    // TODO: mensagem de erro
  });
};
