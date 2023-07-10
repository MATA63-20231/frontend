import {
  PropsWithChildren, createContext, useEffect, useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/Api.tsx";

interface AuthContextData {
  signed: boolean;
  handleLogin: (token: string) => void;
  handleLogout: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();

  const [signed, setSigned] = useState<boolean>(false);

  useEffect(() => {
    const storagedToken = localStorage.getItem("token");

    if (storagedToken) {
      // TODO: Uncomment the below codes when token is returned by backend
      // const parsedToken = JSON.parse(storagedToken);
      // if (parsedToken) {
      setSigned(true);
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      // }
    }
  }, []);

  const handleLogin = (token: string) => {
    setSigned(true);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    // TODO: Change this ugly ternary when token is returned by backend
    localStorage.setItem("token", token || "null");
    // localStorage.setItem("token", token);

    navigate("/");
  };

  const handleLogout = () => {
    setSigned(false);
    api.defaults.headers.Authorization = null;
    localStorage.clear();
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ signed, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
