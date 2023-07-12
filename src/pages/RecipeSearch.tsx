import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IRecipe } from "../interfaces/RecipeInterfaces.tsx";
import { getRecipesSearch } from "../services/RecipesApi.tsx";
import Page from "../components/Page/Page.tsx";
import RouteAuthRules from "../enums/RouteAuthRules.tsx";
import NoImage from "../assets/noimage.svg";
import env from "../config/env.tsx";
import { useNavigate, useParams } from "react-router-dom";

export default function RecipeSearch() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { search_text } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (!search_text) {
      navigate("/");
    } else {
      getRecipesSearch(search_text, setLoading, setRecipes);
    }
  }, [search_text, navigate]);

  // TODO: refatoras (Código duplicado da home)
  return (
    <Page
      pretitle="Confira nossas receitas"
      title="Receitas"
      loading={loading}
      authRule={{ rule: RouteAuthRules.NO_RULE }}
    >
      <Grid container spacing={4}>
        {recipes.map((recipe) => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "300px",
              }}
            >
              <CardActionArea
                href={`/receita/${recipe.id}`}
                sx={{ height: "100%" }}
              >
                {recipe.imagens.length > 0 ? (
                  <CardMedia
                    component="img"
                    title={recipe.titulo}
                    image={`${env.baseUrl}imagem/${recipe.imagens[0].id}`}
                    sx={{
                      height: "72%",
                      width: "auto",
                      mx: "auto",
                      p: 4,
                    }}
                  />
                ) : (
                  <CardMedia
                    component="img"
                    title={recipe.titulo}
                    image={NoImage}
                    sx={{
                      height: "72%",
                      width: "auto",
                      mx: "auto",
                      p: 5,
                    }}
                  />
                )}
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {recipe.titulo}
                  </Typography>
                  <Typography fontSize="14px">
                    Postado por {recipe.usuario.nome}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}
