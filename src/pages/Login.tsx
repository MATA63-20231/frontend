import * as React from "react";

import Page from "../components/Page.tsx";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Grid,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const sendForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("sent");
  };

  return (
    <Page title="Login">
      <Card sx={{ width: 500, m: "auto", px: 5, py: 3 }}>
        <CardContent>
          <form id="login-form" onSubmit={sendForm}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel htmlFor="login">Login </InputLabel>
              <Input id="login" />
            </FormControl>

            <FormControl sx={{ width: "100%" }}>
              <InputLabel htmlFor="senha">Senha</InputLabel>
              <Input
                id="senha"
                type={showPassword ? "text" : "senha"}
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
              sx={{ width: "100%", my: 3, mx: 0, borderRadius: 2 }}
            >
              Login
            </Button>
          </form>

          <Grid>
            <Typography variant="h2">
              Não tem conta?
              <Link> Cadastre-se</Link>
            </Typography>
            <Typography variant="h2">
              <Link>Esqueci minha senha</Link>
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Page>
  );
}
