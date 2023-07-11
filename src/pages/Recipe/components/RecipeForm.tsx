import { Formik, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { IRecipeCreation, IRecipeFormFields } from "../../../interfaces/RecipeInterfaces.js";
import { createRecipe } from "../../../services/RecipesApi.js";
import RecipeFields from "./RecipeFields.js";
import generateRecipeSchema, {
  initialValues,
} from "../schemas/RecipeSchema.js";
import LoadingButton from "../../../components/LoadingButton.js";

export default function RecipeForm() {
  const navigate = useNavigate();

  const acceptedFileTypes = ["JPG", "JPEG", "PNG", "GIF", "SVG"];
  const acceptedFileTypesStr = acceptedFileTypes.join(", ");
  const maxFileSizeMB = 3;
  const maxFileSize = maxFileSizeMB * 1000 * 1024;
  const maxFilesAmount = 10;
  const RecipeCreationSchema = generateRecipeSchema({
    acceptedFileTypes,
    acceptedFileTypesStr,
    maxFileSize,
    maxFileSizeMB,
    maxFilesAmount,
  });

  const recipeToBack = (recipe: IRecipeFormFields): IRecipeCreation => ({
    titulo: recipe.title,
    descricao: recipe.description,
    rendimento: Number(recipe.servings),
    tempoPreparo: {
      horas: Number(recipe.prepTime.hours),
      minutos: Number(recipe.prepTime.minutes),
    },
    listaPreparo: recipe.directions.map((direction) => ({
      descricao: direction,
    })),
    ingredientes: recipe.ingredients.map((ingredient) => ({
      descricao: ingredient,
    })),
    imagens: recipe.images,
  });

  const handleSubmit = (
    values: IRecipeFormFields,
    { setSubmitting }: FormikHelpers<IRecipeFormFields>,
  ) => {
    const recipe = recipeToBack(values);
    createRecipe(recipe, navigate, setSubmitting);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RecipeCreationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        isSubmitting,
        submitForm,
        setFieldValue,
        setFieldTouched,
      }) => (
        <Form>
          <RecipeFields
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
