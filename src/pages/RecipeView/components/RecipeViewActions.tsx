import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteRecipe } from "../../../services/RecipesApi.tsx";

interface IProps {
  recipeId: string;
  setLoading: (loading: boolean) => void;
}

export default function RecipeViewActions({ recipeId, setLoading }: IProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    if (recipeId) {
      deleteRecipe(recipeId, navigate, setLoading);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container justifyContent="center" gap={1}>
        <Button variant="outlined" href={`/editar-receita/${recipeId}`}>
          Editar receita
        </Button>
        <Button variant="outlined" onClick={handleClickOpen}>
          Apagar receita
        </Button>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle fontSize={24} color="primary" id="alert-dialog-title">
          Tem certeza?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza de que deseja apagar esta receita? Esta ação é
            irreversível.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Apagar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
