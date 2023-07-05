import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import RamenDiningIcon from "@mui/icons-material/RamenDiningOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonthOutlined";
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
    <Page title={recipe.titulo} loading={loading}>
      <Grid
        container
        sx={{ m: "auto", maxWidth: "700px", justifyContent: "center" }}
      >
        <Card sx={{ width: "600px" }}>
          <CardMedia
            component="img"
            image={recipe.imagens.length > 0 ? "https://picsum.photos/200" : NoImage}
            sx={{
              width: "20%",
              margin: "auto",
              py: 12,
            }}
            title={recipe.titulo}
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
                {recipe.tempoPreparo.horas}h{recipe.tempoPreparo.minutos}min{" "}
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
                {recipe.rendimento} porções
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
              <PersonOutlinedIcon fontSize="small" color="primary" />
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                ***** {/* TODO: Preencher autor */}
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
              <CalendarMonthIcon fontSize="small" color="primary" />
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {`${recipe.dataCadastro.substring(
                  5,
                  7
                )}/${recipe.dataCadastro.substring(0, 4)}`}
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
                {recipe.ingredientes.map((ingredient) => (
                  <ListItem key={ingredient.id}>
                    <ListItemText primary={ingredient.descricao} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item>
              <Typography variant="h6">Modo de preparo</Typography>
              <List>
                {recipe.listaPreparo.map((etapa) => (
                  <ListItem key={etapa.id}>
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
