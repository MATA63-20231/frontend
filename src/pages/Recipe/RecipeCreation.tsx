import Grid from "@mui/material/Grid";
import Page from "../../components/Page/Page.js";
import RecipeForm from "./components/RecipeForm.js";
import RouteAuthRules from "../../enums/RouteAuthRules.js";

export default function RecipeCreation() {
  return (
    <Page
      title="Nova receita"
      pretitle="Compartilhe sua receita com o mundo"
      authRule={{ rule: RouteAuthRules.SIGNED_ONLY }}
    >
      <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
        <RecipeForm />
      </Grid>
    </Page>
  );
}
