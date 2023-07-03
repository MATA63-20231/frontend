import * as React from "react";

import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import Page from "../components/Page.tsx";
import { ILoginData } from "../interfaces/interfaces.tsx";
import { postLogin } from "../services/UserApi.tsx";
import Loading from "../components/Loading.tsx";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState<boolean>(false);

  const [loginData, setLoginData] = React.useState<ILoginData>({
    usuario: "",
    senha: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChange = () => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setLoginData({
        ...loginData,
        [event.target.name]: event.target.value,
      });
    };
  };

  const sendForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    postLogin(loginData, navigate, setLoading);
  };

  return (
    <Page title="Login">
      <Card sx={{ width: 500, m: "auto", px: 5, py: 3 }}>
        <CardContent>
          <form id="login-form" onSubmit={sendForm}>
            <FormControl sx={{ width: "100%", my: 1 }}>
              <InputLabel htmlFor="usuario"> Usuário </InputLabel>
              <Input
                id="usuario"
                name="usuario"
                value={loginData.usuario}
                onChange={handleChange()}
              />
            </FormControl>

            <FormControl sx={{ width: "100%", my: 1 }}>
              <InputLabel htmlFor="senha">Senha</InputLabel>
              <Input
                id="senha"
                name="senha"
                value={loginData.senha}
                onChange={handleChange()}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{ width: "100%", py: 1.25, my: 3, mx: 0, borderRadius: 2 }}
            >
              {loading ? <Loading /> : "Login"}
            </Button>
          </form>

          <Grid>
            <Typography variant="h2">
              Não tem conta?
              <Link href="/cadastro"> Cadastre-se</Link>
            </Typography>
            <Typography variant="h2">
              <Link href="alterar-senha">Esqueci minha senha</Link>
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Page>
  );
}
