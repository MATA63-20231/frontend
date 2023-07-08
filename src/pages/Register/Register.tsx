import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Page from "../../components/Page.tsx";
import RegisterForm from "./components/RegisterForm.tsx";

export default function Register() {
  return (
    <Page title="Cadastre-se" pretitle="Cadastre-se para ter acesso a todas as funcionalidades da nossa plataforma">
      <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
        <RegisterForm />

        <Typography variant="h2">
          Já tem conta?
          &nbsp;
          <Link href="/login">Faça login</Link>
        </Typography>
      </Grid>
    </Page>
  );
}
