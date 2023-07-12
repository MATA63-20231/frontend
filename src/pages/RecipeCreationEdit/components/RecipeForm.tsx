import { Formik, Form, FormikHelpers } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  IRecipeToBack,
  IRecipeFormFields,
} from "../../../interfaces/RecipeInterfaces.js";
import { createRecipe, editRecipe } from "../../../services/RecipesApi.js";
import RecipeFields from "./RecipeFields.js";
import generateRecipeSchema, {
  initialValues,
} from "../schemas/RecipeSchema.js";
import LoadingButton from "../../../components/LoadingButton.js";

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
      ingredientes: recipe.ingredients.map((ingredient) => ({
        descricao: ingredient,
      })),
      listaPreparo: recipe.directions.map((direction) => ({
        descricao: direction,
      })),
      imagens: recipe.images,
    };

    const recipeFormData = new FormData();

    recipeFormData.append("titulo", recipeBack.titulo);
    recipeFormData.append("descricao", recipeBack.descricao);
    recipeFormData.append("rendimento", String(recipeBack.rendimento));
    recipeFormData.append("tempoPreparo", JSON.stringify(recipeBack.tempoPreparo));
    recipeFormData.append("ingredientes", JSON.stringify(recipeBack.ingredientes));
    recipeFormData.append("listaPreparo", JSON.stringify(recipeBack.listaPreparo));
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
              {recipeId ? "Editar" : "Cadastrar"}
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
