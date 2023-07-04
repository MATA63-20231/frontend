import { NavigateFunction } from "react-router-dom";
import { ILoginData, IUser } from "../interfaces/interfaces.tsx";
import { POST } from "./Api.tsx";

export const postSignUp = (
  userData: IUser,
  navigate: NavigateFunction,
  setLoading: (loading: boolean) => void,
) => {
  POST<IUser, IUser>({
    path: "/usuario",
    body: userData,
    setLoading,
    onSuccess: () => {
      // enqueueSnackbar({
      //   variant: "success",
      //   message: "Usuário cadastrado com sucesso!",
      // });
      navigate("/login");
    },
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
      // enqueueSnackbar({
      //   variant: "success",
      //   message: "Login efetuado com sucesso!",
      // });
      navigate("/");
    },
  });
};
