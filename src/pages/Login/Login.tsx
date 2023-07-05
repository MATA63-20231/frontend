import Grid from "@mui/material/Grid";
import { Typography, Link } from "@mui/material";
import Page from "../../components/Page.tsx";
import LoginForm from "./components/LoginForm.tsx";

export default function RecipeCreation() {
  return (
    <Page title="Login">
      <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
        <LoginForm />

        <Grid sx={{py:2}}>
          <Typography variant="h2">
            Não tem conta?
            <Link href="/cadastro"> Cadastre-se</Link>
          </Typography>
        </Grid>

      </Grid>
    </Page>
  );
}
