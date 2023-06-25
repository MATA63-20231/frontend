import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Page from "../components/Page.tsx";
import { IRecipe } from "../interfaces/interfaces.tsx";
import { getAllRecipes } from "../services/Api.tsx";
import NoImage from "../assets/noimage.svg";

export default function Home() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getAllRecipes(setLoading, setRecipes);
  }, []);

  return (
    <Page pretitle="Receitas" title="Confira nossas receitas" loading={loading}>
      <Grid container spacing={4}>
        {recipes.map((recipe) => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardActionArea href={`/receita/${recipe.id}`}>
                <CardMedia
                  component="div"
                  sx={{
                    py: "35%",
                    width: "83%",
                    mx: "auto",
                    my: "1em",
                  }}
                  title={recipe.titulo}
                  image={NoImage}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {recipe.titulo}
                  </Typography>
                  <Typography>{recipe.descricao}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}
