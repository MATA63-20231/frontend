import { Formik, Form, FormikHelpers } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  IRecipeToBack,
  IRecipeFormFields,
} from "../../../interfaces/RecipeInterfaces.tsx";
import { createRecipe, editRecipe } from "../../../services/RecipesApi.tsx";
import RecipeFields from "./RecipeFields.tsx";
import generateRecipeSchema, {
  initialValues,
} from "../schemas/RecipeSchema.tsx";
import LoadingButton from "../../../components/LoadingButton.tsx";

interface IProps {
  initialRecipe?: IRecipeFormFields;
}

export default function RecipeForm({ initialRecipe }: IProps) {
  const navigate = useNavigate();
  const { recipeId } = useParams();

  const acceptedFileTypes = ["JPG", "JPEG", "PNG", "GIF", "SVG"];
  const acceptedFileTypesStr = acceptedFileTypes.join(", ");
  const maxFileSizeMB = 3;
  const maxFileSize = maxFileSizeMB * 1000 * 1024;
  const maxFilesAmount = 10;
  const RecipeSchema = generateRecipeSchema({
    acceptedFileTypes,
    acceptedFileTypesStr,
    maxFileSize,
    maxFileSizeMB,
    maxFilesAmount,
  });

  const recipeToBack = (recipe: IRecipeFormFields): FormData => {
    const recipeBack: IRecipeToBack = {
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
    };

    const recipeFormData = new FormData();

    const keys = Object.keys(recipeBack);

    keys.forEach((key) => {
      if (key !== "imagens") {
        recipeFormData.append(
          key,
          JSON.stringify(recipeBack[key as keyof IRecipeToBack]),
        );
      }
    });

    recipeBack.imagens.forEach((image) => recipeFormData.append("imagens", image));

    return recipeFormData;
  };

  const handleSubmit = (
    values: IRecipeFormFields,
    { setSubmitting }: FormikHelpers<IRecipeFormFields>,
  ) => {
    const recipe = recipeToBack(values);
    if (recipeId) {
      editRecipe(recipe, recipeId, navigate, setSubmitting);
    } else {
      createRecipe(recipe, navigate, setSubmitting);
    }
  };

  return (
    <Formik
      initialValues={initialRecipe || initialValues}
      validationSchema={RecipeSchema}
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

RecipeForm.defaultProps = {
  initialRecipe: initialValues,
};
