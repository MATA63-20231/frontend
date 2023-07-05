import Grid from "@mui/material/Grid";
import { Typography, Link } from "@mui/material";
import Page from "../../components/Page.tsx";
import LoginForm from "./components/RegisterForm.tsx";

export default function RecipeCreation() {
  return (
    <Page title="Cadastre-se">
      <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
        <LoginForm />

        <Typography variant="h2">
          Já tem conta?
          <Link href="/login"> Faça login</Link>
        </Typography>
      </Grid>
    </Page>
  );
}
