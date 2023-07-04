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
import { IUser } from "../interfaces/interfaces.tsx";
import Loading from "../components/Loading.tsx";
import { postSignUp } from "../services/UserApi.tsx";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState<boolean>(false);

  const [userData, setUserData] = React.useState<IUser>({
    usuario: "",
    nome: "",
    email: "",
    senha: "",
    confirmacaoSenha: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const sendForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    postSignUp(userData, navigate, setLoading);
  };

  return (
    <Page title="Cadastro">
      <Card sx={{
        width: 500, m: "auto", px: 5, py: 3,
      }}
      >
        <CardContent>
          <form id="signup-form" onSubmit={sendForm}>
            <FormControl sx={{ width: "100%", my: 1 }}>
              <InputLabel htmlFor="usuario"> Usuário </InputLabel>
              <Input
                id="usuario"
                name="usuario"
                value={userData.usuario}
                onChange={handleChange()}
              />
            </FormControl>

            <FormControl sx={{ width: "100%", my: 1 }}>
              <InputLabel htmlFor="nome"> Nome </InputLabel>
              <Input
                id="nome"
                name="nome"
                value={userData.nome}
                onChange={handleChange()}
              />
            </FormControl>

            <FormControl sx={{ width: "100%", my: 1 }}>
              <InputLabel htmlFor="email"> Email </InputLabel>
              <Input
                id="email"
                name="email"
                type="email"
                value={userData.email}
                onChange={handleChange()}
              />
            </FormControl>

            <FormControl sx={{ width: "100%", my: 1 }}>
              <InputLabel htmlFor="senha">Senha</InputLabel>
              <Input
                id="senha"
                name="senha"
                value={userData.senha}
                onChange={handleChange()}
                type={showPassword ? "text" : "password"}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
            </FormControl>

            <FormControl sx={{ width: "100%", my: 1 }}>
              <InputLabel htmlFor="confirmacaoSenha">
                Confirmação da enha
              </InputLabel>
              <Input
                id="confirmacaoSenha"
                name="confirmacaoSenha"
                value={userData.confirmacaoSenha}
                onChange={handleChange()}
                type={showPassword ? "text" : "password"}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
              />
            </FormControl>

            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                width: "100%", py: 1.25, my: 3, mx: 0, borderRadius: 2,
              }}
            >
              {loading ? <Loading /> : "Cadastrar"}
            </Button>
          </form>

          <Grid>
            <Typography variant="h2">
              Já é cadastrado?
              <Link href="/login"> Faça login. </Link>
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Page>
  );
}
