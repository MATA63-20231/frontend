import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Page from "../../components/Page.tsx";
import LoginForm from "./components/LoginForm.tsx";
import RouteAuthRules from "../../enums/RouteAuthRules.tsx";

export default function Login() {

  return (
    <Page
      title="Login"
      pretitle="Entre para aproveitar todas as funcionalidades da nossa plataforma"
      authRule={{ rule: RouteAuthRules.NO_SIGNED_ONLY }}>
      <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
        <LoginForm />

        <Typography variant="h2">
          Não tem conta?&nbsp;
          <Link href="/cadastro">Cadastre-se</Link>
        </Typography>
      </Grid>
    </Page>
  );
}
