import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import RamenDiningIcon from "@mui/icons-material/RamenDiningOutlined";
import { List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page.tsx";
import { getRecipeDetails } from "../services/RecipesApi.tsx";
import { IRecipe } from "../interfaces/RecipeInterfaces.tsx";
import NoImage from "../assets/noimage.svg";

// TODO: Componentizar rs
// TODO: Avaliação e comentários
export default function RecipeView() {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState<IRecipe>({
    id: "",
    titulo: "",
    descricao: "",
    dataCadastro: "",
    rendimento: 0,
    tempoPreparo: { horas: 0, minutos: 0 },
    ingredientes: [],
    listaPreparo: [],
    imagens: [],
  });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (recipeId) {
      getRecipeDetails(recipeId, setLoading, setRecipe);
    }
  }, [recipeId]);

  return (
    <Page title="Título da Receita" pretitle="Confira esta receita">
      <Grid container sx={{ m: "0 auto", maxWidth: "700px" }}>
        <Card>
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random?wallpapers"
          />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 0.5, md: 1 }}
            sx={{
              px: 1,
              py: 2,
            }}
          >
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 0,
                width: "100%",
              }}
            >
              <TimerIcon fontSize="small" color="primary" />

              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                Tempo de preparo: {recipe.tempoPreparo.horas}h
                {recipe.tempoPreparo.minutos}min
              </Typography>
            </Stack>
            <Divider
              orientation="vertical"
              sx={{ borderColor: "primary.light" }}
              flexItem
            />
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 0,
                width: "100%",
              }}
            >
              <RamenDiningIcon fontSize="small" color="primary" />
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                Rendimento: {recipe.rendimento} porções
              </Typography>
            </Stack>
          </Stack>

          <Grid
            container
            direction="column"
            alignItems="flex-start"
            sx={{ p: 2 }}
          >
            <Grid item>
              <Typography variant="h6">Ingredientes</Typography>

              <List>
                {recipe.ingredientes.map((ingredient, index) => (
                  <ListItem key={ingredient.id}>
                    <Grid sx={{ mr: 1 }}>
                      <Typography variant="indexList">{index + 1}</Typography>
                    </Grid>

                    <ListItemText primary={ingredient.descricao} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item>
              <Typography variant="h6">Modo de preparo</Typography>
              <List>
                {recipe.listaPreparo.map((etapa, index) => (
                  <ListItem key={etapa.id}>
                    <Grid sx={{ mr: 1 }}>
                      <Typography variant="indexList">{index + 1}</Typography>
                    </Grid>
                    <ListItemText
                      primary={etapa.descricao}
                      // secondary="desc item"
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Page>
  );
}
