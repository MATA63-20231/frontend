import Grid from "@mui/material/Grid";
import { Typography, Link } from "@mui/material";
import Page from "../../components/Page.tsx";
import LoginForm from "./components/LoginForm.tsx";

export default function RecipeCreation() {
  return (
    <Page title="Login" pretitle="Entre para aproveitar todas as funcionalidades da nossa plataforma">
      <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
        <LoginForm />

        <Typography variant="h2">
          Não tem conta?
          &nbsp;
          <Link href="/cadastro">Cadastre-se</Link>
        </Typography>
      </Grid>
    </Page>
  );
}
