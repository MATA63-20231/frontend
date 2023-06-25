import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { List, ListItem, ListItemText } from "@mui/material";
import Page from "../components/Page.tsx";
import { useEffect, useState } from "react";
import { getRecipeDetails2 } from "../services/Api.tsx";
import { IRecipe } from "../interfaces/interfaces.tsx";
import { useParams } from "react-router-dom";

// TODO: Componentizar rs
// TODO: Avaliação e comentários
export default function RecipeView() {
  const { recipeId } = useParams();

  const [recipe, setRecipe] = useState<IRecipe>({
    id: "",
    titulo: "",
    descricao: "",
    rendimento: "",
    tempoPreparo: "",
    imagem: "",
    dataCadastro: "",
    ingredientes: [],
    listaPreparo: [],
  });

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (recipeId) {
      getRecipeDetails2(recipeId, setLoading, setRecipe);
      console.log(recipe);
    }
  }, []);

  return (
    <Page title={recipe.titulo} loading={loading}>
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
              <TimerOutlinedIcon fontSize="small" color="primary" />
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {recipe.tempoPreparo}min {/* TODO: validar data vinda do back */}
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
              <RamenDiningOutlinedIcon fontSize="small" color="primary" />
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
              <PersonOutlineOutlinedIcon fontSize="small" color="primary" />
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
              <CalendarMonthOutlinedIcon fontSize="small" color="primary" />
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {recipe.dataCadastro.substring(5,7) + "/" + recipe.dataCadastro.substring(0,4)}
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
                    <ListItemText
                      primary={
                        ingredient.quantidade + " " + ingredient.descricao
                      }
                    />
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

// descricao
