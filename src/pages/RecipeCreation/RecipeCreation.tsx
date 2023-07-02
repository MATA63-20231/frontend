import Grid from "@mui/material/Grid";
import Page from "../../components/Page.tsx";
import RecipeCreationForm from "./components/RecipeCreationForm.tsx";
import { enqueueSnackbar } from "notistack";

export default function RecipeCreation() {
  return (
    <Page pretitle="Compartilhe sua receita com o mundo" title="Nova receita">
      <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
        <button
          onClick={() => {
            enqueueSnackbar({
              title: "FOOBAR",
              message: "Nova receita",
              variant: "success",
            });
            enqueueSnackbar({
              title: "FOOBAR",
              message: "Nova receita",
              variant: "error",
            });
            enqueueSnackbar({
              title: "FOOBAR",
              message: "Nova receita",
              variant: "warning",
            });
            enqueueSnackbar({
              title: "FOOBAR",
              message: "Nova receita",
              variant: "info",
            });
          }}>
          Show snackbar
        </button>
        <RecipeCreationForm />
      </Grid>
    </Page>
  );
}
