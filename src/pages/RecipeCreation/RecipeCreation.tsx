import Grid from "@mui/material/Grid";
import Page from "../../components/Page.tsx";
import RecipeCreationForm from "./components/RecipeCreationForm.tsx";

export default function RecipeCreation() {
  return (
    <Page pretitle="Foo" title="Bar">
      <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
        <RecipeCreationForm />
      </Grid>
    </Page>
  );
}
