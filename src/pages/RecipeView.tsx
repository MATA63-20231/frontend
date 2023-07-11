import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import RamenDiningIcon from "@mui/icons-material/RamenDiningOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { getRecipeDetails } from "../services/RecipesApi.tsx";
import Page from "../components/Page/Page.tsx";
import RouteAuthRules from "../enums/RouteAuthRules.tsx";
import { IRecipe } from "../interfaces/RecipeInterfaces.tsx";
import ImagesCarousel from "../components/Carousel.tsx";

// TODO: Avaliação e comentários

export default function RecipeView() {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState<IRecipe>({
    id: "",
    dataCadastro: "",
    titulo: "",
    descricao: "",
    rendimento: 0,
    tempoPreparo: { horas: 0, minutos: 0 },
    ingredientes: [],
    listaPreparo: [],
    imagens: [],
    usuario: {
      id: "",
      usuario: "",
      nome: "",
      email: "",
    },
    curtidas: [],
    comentarios: [],
  });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (recipeId) {
      getRecipeDetails(recipeId, setLoading, setRecipe);
    }
  }, [recipeId]);

  return (
    <Page
      title={recipe.titulo}
      pretitle="Confira esta receita"
      authRule={{ rule: RouteAuthRules.NO_RULE }}
      loading={loading}
    >
      <Grid
        container
        sx={{ m: "auto", maxWidth: "700px", justifyContent: "center" }}
      >
        <Stack sx={{ py: 1 }}>
          <Typography
            color="secondary.main"
            sx={{
              fontSize: "13px",
              letterSpacing: "1px",
              fontWeight: 400,
              textAlign: "start",
            }}
          >
            Postado por
            {" "}
            {recipe.usuario.nome}
            {" "}
            em
            {` ${recipe.dataCadastro.substring(
              8,
              10,
            )}/${recipe.dataCadastro.substring(
              5,
              7,
            )}/${recipe.dataCadastro.substring(0, 4)}`}
          </Typography>
        </Stack>
        <Card sx={{ width: "600px" }}>
          <ImagesCarousel images={recipe.imagens} />

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
                Tempo de preparo:
                {" "}
                {recipe.tempoPreparo.horas > 0
                  && `${recipe.tempoPreparo.horas}h`}
                {recipe.tempoPreparo.minutos > 0
                  && `${recipe.tempoPreparo.minutos}min`}
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
                Rendimento:
                {" "}
                {recipe.rendimento}
                {" "}
                {recipe.rendimento > 1 ? "porções" : "porção"}
              </Typography>
            </Stack>
          </Stack>

          <Grid
            container
            direction="column"
            // alignItems="flex-start"
            sx={{ p: 2, pt: 0 }}
          >
            {recipe.descricao && (
              <Grid item sx={{ py: 2 }}>
                <Typography>{recipe.descricao}</Typography>
              </Grid>
            )}

            <Grid item>
              <Typography variant="h6" textAlign="start">
                Ingredientes
              </Typography>

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
              <Typography variant="h6" textAlign="start">
                Modo de preparo
              </Typography>
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
