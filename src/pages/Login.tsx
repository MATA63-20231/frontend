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
  CardContent,
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
    <Page>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <form id="login-form" onSubmit={sendForm}>
          <FormControl>
            <InputLabel htmlFor="login">Login </InputLabel>
            <Input id="login" />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
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
          <Button variant="contained"> Login </Button>
        </form>
      </Grid>

      <Typography>
        Não tem conta?
        <Link> Cadastre-se</Link>
      </Typography>
      <Link>Esqueci minha senha</Link>
    </Page>
  );
}
