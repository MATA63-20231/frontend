import { NavigateFunction } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { ILoginData, IRegister } from "../interfaces/AuthInterfaces.tsx";
import { POST } from "./Api.tsx";

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
      // TODO: Change to navigate(-1) when fix the reload need
      // navigate(-1);
      navigate("/");
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    },
  });
};
