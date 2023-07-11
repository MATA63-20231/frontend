import { Formik, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  IRecipeCreation,
  IRecipeCreationFormFields,
} from "../../../interfaces/RecipeInterfaces.tsx";
import { createRecipe } from "../../../services/RecipesApi.tsx";
import RecipeCreationFields from "./RecipeCreationFields.tsx";
import generateRecipeCreationSchema, {
  initialValues,
} from "../schemas/RecipeCreationSchema.tsx";
import LoadingButton from "../../../components/LoadingButton.tsx";

export default function RecipeCreationForm() {
  const navigate = useNavigate();

  const acceptedFileTypes = ["JPG", "JPEG", "PNG", "GIF", "SVG"];
  const acceptedFileTypesStr = acceptedFileTypes.join(", ");
  const maxFileSizeMB = 3;
  const maxFileSize = maxFileSizeMB * 1000 * 1024;
  const maxFilesAmount = 10;
  const RecipeCreationSchema = generateRecipeCreationSchema({
    acceptedFileTypes,
    acceptedFileTypesStr,
    maxFileSize,
    maxFileSizeMB,
    maxFilesAmount,
  });

  // const recipeToBack = (recipe: IRecipeCreationFormFields): IRecipeCreation => ({
  //   titulo: recipe.title,
  //   descricao: recipe.description,
  //   rendimento: Number(recipe.servings),
  //   tempoPreparo: {
  //     horas: Number(recipe.prepTime.hours),
  //     minutos: Number(recipe.prepTime.minutes),
  //   },
  //   listaPreparo: recipe.directions.map((direction) => ({
  //     descricao: direction,
  //   })),
  //   ingredientes: recipe.ingredients.map((ingredient) => ({
  //     descricao: ingredient,
  //   })),
  //   imagens: recipe.images,
  // });

  const recipeToBack = (recipe: IRecipeCreationFormFields) => {
    const recipeFormData = new FormData();
    recipeFormData.append("titulo", recipe.title);
    recipeFormData.append("descricao", recipe.description);
    recipeFormData.append("rendimento", String(recipe.servings));
    recipeFormData.append("tempoPreparo", JSON.stringify(recipe.prepTime));
    recipeFormData.append("ingredientes", JSON.stringify(recipe.ingredients));
    recipeFormData.append("listaPreparo", JSON.stringify(recipe.directions));
    recipe.images.forEach((image) => recipeFormData.append("imagens", image));

    return recipeFormData;
  };

  const handleSubmit = (
    values: IRecipeCreationFormFields,
    { setSubmitting }: FormikHelpers<IRecipeCreationFormFields>
  ) => {
    const recipe = recipeToBack(values);
    createRecipe(recipe, navigate, setSubmitting);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RecipeCreationSchema}
      onSubmit={handleSubmit}>
      {({
        values,
        errors,
        isSubmitting,
        submitForm,
        setFieldValue,
        setFieldTouched,
      }) => (
        <Form id="oi">
          <RecipeCreationFields
            values={values}
            errors={errors}
            loading={isSubmitting}
            acceptedFileTypes={acceptedFileTypes}
            acceptedFileTypesStr={acceptedFileTypesStr}
            maxFileSizeMB={maxFileSizeMB}
            maxFilesAmount={maxFilesAmount}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
          />
          <Grid sx={{ mt: 2 }}>
            <LoadingButton loading={isSubmitting} onClick={submitForm}>
              Cadastrar
            </LoadingButton>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
