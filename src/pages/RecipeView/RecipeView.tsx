import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { getRecipeDetails } from "../../services/RecipesApi.tsx";
import Page from "../../components/Page/Page.tsx";
import RouteAuthRules from "../../enums/RouteAuthRules.tsx";
import { IRecipe } from "../../interfaces/RecipeInterfaces.tsx";
import ImagesCarousel from "../../components/ImagesCarousel.tsx";
import AuthContext from "../../contexts/AuthContext.tsx";
import RecipeViewActions from "./components/RecipeViewActions.tsx";
import RecipeViewLikes from "./components/RecipeViewLikes.tsx";
import env from "../../config/env.tsx";

// TODO: Comentários

export default function RecipeView() {
  const navigate = useNavigate();
  const { isTheSameUser } = useContext(AuthContext);
  const { recipeId } = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const [shouldReload, setShouldReload] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<IRecipe>();

  useEffect(() => {
    if (!recipeId) {
      navigate("/");
    } else {
      getRecipeDetails(recipeId, navigate, setLoading, setRecipe);
    }
  }, [recipeId, shouldReload, navigate]);

  return (
    <Page
      title={recipe?.titulo}
      pretitle="Confira esta receita"
      authRule={{ rule: RouteAuthRules.NO_RULE }}
      loading={loading}
    >
      {!recipe ? null : (
        <>
          {recipeId && isTheSameUser(recipe.usuario.id) && (
            <RecipeViewActions recipeId={recipeId} setLoading={setLoading} />
          )}
          <Grid
            container
            sx={{ m: "auto", maxWidth: "700px", justifyContent: "center" }}
          >
            <Stack sx={{ mt: 2, py: 1 }}>
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
              <ImagesCarousel
                images={recipe.imagens.map(({ id }) => ({
                  id,
                  link: `${env.baseUrl}imagem/${id}`,
                }))}
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
                    Tempo de preparo:&nbsp;
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
                    Rendimento:&nbsp;
                    {recipe.rendimento}
                    &nbsp;
                    {recipe.rendimento > 1 ? "porções" : "porção"}
                  </Typography>
                </Stack>
              </Stack>

              <Grid container direction="column" sx={{ p: 2, pt: 0 }}>
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
                          <Typography variant="indexList">
                            {index + 1}
                          </Typography>
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
                          <Typography variant="indexList">
                            {index + 1}
                          </Typography>
                        </Grid>
                        <ListItemText primary={etapa.descricao} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>

              {recipeId && (
                <Grid sx={{ mb: 3 }}>
                  <RecipeViewLikes
                    recipeId={recipeId}
                    totalLikes={recipe.totalLikes}
                    totalDislikes={recipe.totalDislikes}
                    myLike={recipe.minhaCurtida}
                    setShouldReload={setShouldReload}
                  />
                </Grid>
              )}
            </Card>
          </Grid>
        </>
      )}
    </Page>
  );
}
