import { enqueueSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { getRecipeDetails } from "../../services/RecipesApi.tsx";
import {
  IRecipeFormFields,
  IRecipe,
} from "../../interfaces/RecipeInterfaces.tsx";
import Page from "../../components/Page/Page.tsx";
import RecipeForm from "./components/RecipeForm.tsx";
import RouteAuthRules from "../../enums/RouteAuthRules.tsx";
import env from "../../config/env.tsx";

export default function RecipeEdit() {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const [rawRecipe, setRawRecipe] = useState<IRecipe>();
  const [recipeForm, setRecipeForm] = useState<IRecipeFormFields>();

  async function getFileFromUrl(url: string, name: string) {
    const defaultType = "image/jpeg";
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], name, {
      type: data.type || defaultType,
    });
  }

  useEffect(() => {
    if (!recipeId) {
      navigate("/");
    } else {
      getRecipeDetails(recipeId, navigate, setLoading, setRawRecipe);
    }
  }, [recipeId, navigate]);

  useEffect(() => {
    if (rawRecipe) {
      const imagesPromises = rawRecipe.imagens.map(({ id, nome }) =>
        getFileFromUrl(`${env.baseUrl}imagem/${id}`, nome)
      );
      setLoading(true);
      Promise.all(imagesPromises)
        .then((images) => {
          const recipeToForm = {
            title: rawRecipe.titulo,
            description: rawRecipe.descricao,
            servings: Number(rawRecipe.rendimento),
            prepTime: {
              hours: Number(rawRecipe.tempoPreparo.horas),
              minutes: Number(rawRecipe.tempoPreparo.minutos),
            },
            directions: rawRecipe.listaPreparo.map(
              ({ descricao }) => descricao
            ),
            ingredients: rawRecipe.ingredientes.map(
              ({ descricao }) => descricao
            ),
            images,
          };
          setRecipeForm(recipeToForm);
        })
        .catch(() =>
          enqueueSnackbar({
            variant: "error",
            message:
              "Não foi possível processar as imagens. Por favor, tente mais tarde.",
          })
        )
        .finally(() => setLoading(false));
    }
  }, [rawRecipe]);

  return (
    <Page
      title="Editar receita"
      pretitle="Edite sua receita"
      loading={loading}
      authRule={{
        rule: RouteAuthRules.SAME_USER_ONLY,
        userId: rawRecipe?.usuario?.id,
        redirectTo: `/receita/${recipeId}`,
      }}>
      {!recipeForm ? null : (
        <Grid sx={{ maxWidth: "sm", margin: "0 auto" }}>
          <RecipeForm initialRecipe={recipeForm} />
        </Grid>
      )}
    </Page>
  );
}
