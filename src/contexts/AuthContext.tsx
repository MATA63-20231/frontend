import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/Api.tsx";

interface AuthContextData {
  signed: boolean | null;
  handleLogin: (token: string) => void;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();

  const [signed, setSigned] = useState<boolean | null>(null);

  const authContextValue = useMemo(() => {
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

    return { signed, handleLogin, handleLogout };
  }, [signed, navigate]);

  useEffect(() => {
    const storagedToken = localStorage.getItem("token");

    if (storagedToken) {
      // TODO: Uncomment the below codes when token is returned by backend
      // const parsedToken = JSON.parse(storagedToken);
      // if (parsedToken) {
      setSigned(true);
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      // }
    } else {
      setSigned(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
