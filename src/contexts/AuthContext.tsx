import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { api } from "../services/Api";

interface AuthContextData {
  signed: boolean;
  setSigned: (signed: boolean) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: PropsWithChildren) => {
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

  return (
    <AuthContext.Provider value={{ signed, setSigned }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
