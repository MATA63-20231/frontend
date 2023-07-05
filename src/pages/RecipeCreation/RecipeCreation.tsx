import Grid from "@mui/material/Grid";
import Page from "../../components/Page.tsx";
import RecipeCreationForm from "./components/RecipeCreationForm.tsx";

export default function RecipeCreation() {
  return (
    <Page pretitle="Compartilhe sua receita com o mundo" title="Nova receita">
      <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
        <RecipeCreationForm />
      </Grid>
    </Page>
  );
}
