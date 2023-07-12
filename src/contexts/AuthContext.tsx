import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/Api.tsx";
import { ILoginResponse } from "../interfaces/AuthInterfaces.tsx";
import { IUser } from "../interfaces/UserInterfaces.tsx";

interface AuthContextData {
  signedIn: boolean | null;
  isTheSameUser: (userId: string | undefined) => boolean;
  handleLogin: (loginData: ILoginResponse) => void;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>();

  const authContextValue = useMemo(() => {
    const handleLogin = ({ token, usuario }: ILoginResponse) => {
      setUser(usuario);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(usuario));
      navigate("/");
    };

    const handleLogout = () => {
      setUser(null);
      api.defaults.headers.Authorization = null;
      localStorage.clear();
      navigate("/login");
    };

    const isTheSameUser = (userId: string | undefined) => {
      return Boolean(user && userId && user.id === userId);
    };

    const isSignedIn = () => {
      if (user === undefined) return null;
      return Boolean(user);
    };

    const signedIn = isSignedIn();

    return { signedIn, isTheSameUser, handleLogin, handleLogout };
  }, [user, navigate]);

  useEffect(() => {
    const storagedToken = localStorage.getItem("token");
    const storagedUser = localStorage.getItem("user");

    if (storagedToken && storagedUser) {
      const parsedToken = JSON.parse(storagedToken);
      const parsedUser = JSON.parse(storagedUser);

      if (parsedToken && parsedUser) {
        setUser(parsedUser);
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }
    } else {
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
