import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Page from "../components/Page/Page.tsx";
import RouteAuthRules from "../enums/RouteAuthRules.tsx";
import NoImage from "../assets/noimage.svg";
import env from "../config/env.tsx";
import { getAllRecipes } from "../services/RecipesApi.tsx";
import { IRecipe } from "../interfaces/RecipeInterfaces.tsx";

export default function Home() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getAllRecipes(setLoading, setRecipes);
  }, []);

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
            <Card>
              <CardActionArea href={`/receita/${recipe.id}`}>
                <Grid sx={{ height: "250px" }}>
                  <CardMedia
                    component="img"
                    title={recipe.titulo}
                    image={
                      !recipe.imagens || recipe.imagens.length === 0
                        ? NoImage
                        : `${env.baseUrl}imagem/${recipe.imagens[0].id}`
                    }
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      height: "auto",
                      width: "auto",
                      m: "auto",
                    }}
                  />
                </Grid>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {recipe.titulo}
                  </Typography>
                  <Typography fontSize="14px">
                    Postado por
                    {" "}
                    {recipe.usuario.nome}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Grid
                container
                direction="row"
                justifyContent="center"
                gap={3}
                sx={{ mb: 2 }}
              >
                <Grid>
                  <Tooltip
                    title={`${recipe.totalLikes} pessoas gostaram dessa receita`}
                  >
                    <Grid container>
                      <ThumbUpAltIcon color="primary" />
                      <Typography color="primary" fontWeight={500}>
                        &nbsp;
                        {recipe.totalLikes}
                      </Typography>
                    </Grid>
                  </Tooltip>
                </Grid>
                <Grid>
                  <Tooltip
                    title={`${recipe.totalLikes} pessoas não gostaram dessa receita`}
                  >
                    <Grid container>
                      <ThumbDownAltIcon color="primary" />
                      <Typography color="primary" fontWeight={500}>
                        &nbsp;
                        {recipe.totalDislikes}
                      </Typography>
                    </Grid>
                  </Tooltip>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}
