import Grid from "@mui/material/Grid";
import Page from "../../components/Page.js";
import RecipeCreationForm from "./components/RecipeCreationForm.tsx";

export default function RecipeCreation() {
  return (
    <Page title="Foo" subtitle="Bar">
      <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
        <RecipeCreationForm />
      </Grid>
    </Page>
  );
}
