import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { getRecipeDetails } from "../../services/RecipesApi.tsx";
import {
  IRecipeFormFields,
  IRecipeRead,
} from "../../interfaces/RecipeInterfaces.tsx";
import Page from "../../components/Page/Page.tsx";
import RecipeForm from "./components/RecipeForm.tsx";
import RouteAuthRules from "../../enums/RouteAuthRules.tsx";

export default function RecipeEdit() {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const [rawRecipe, setRawRecipe] = useState<IRecipeRead>();
  const [recipeForm, setRecipeForm] = useState<IRecipeFormFields>();

  useEffect(() => {
    if (!recipeId) {
      navigate("/");
    } else {
      getRecipeDetails(recipeId, navigate, setLoading, setRawRecipe);
    }
  }, [recipeId, navigate]);

  useEffect(() => {
    if (rawRecipe) {
      const recipeToForm = (recipe: IRecipeRead): IRecipeFormFields => ({
        title: recipe.titulo,
        description: recipe.descricao,
        servings: Number(recipe.rendimento),
        prepTime: {
          hours: Number(recipe.tempoPreparo.horas),
          minutes: Number(recipe.tempoPreparo.minutos),
        },
        directions: recipe.listaPreparo.map(({ descricao }) => descricao),
        ingredients: recipe.ingredientes.map(({ descricao }) => descricao),
        // TODO: images
        images: [],
      });

      setRecipeForm(recipeToForm(rawRecipe));
    }
  }, [rawRecipe]);

  return !recipeForm ? null : (
    <Page
      title="Editar receita"
      pretitle="Edite sua receita"
      loading={loading}
      authRule={{
        rule: RouteAuthRules.SAME_USER_ONLY,
        userId: "TODO",
        redirectTo: `/receita/${recipeId}`,
      }}
    >
      <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
        <RecipeForm initialRecipe={recipeForm} />
      </Grid>
    </Page>
  );
}
