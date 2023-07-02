import { Formik, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { IRecipeCreation } from "../../../interfaces/interfaces.tsx";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";
import { createRecipe } from "../../../services/RecipesApi.tsx";
import RecipeCreationFields from "./RecipeCreationFields.tsx";
import RecipeCreationSchema, {
  initialValues,
} from "../schemas/RecipeCreationSchema.tsx";
import LoadingButton from "../../../components/LoadingButton.tsx";

export default function RecipeCreationForm() {
  const navigate = useNavigate();

  const recipeToBack = (recipe: IRecipeCreationFields): IRecipeCreation => {
    return {
      titulo: recipe.title,
      descricao: recipe.description,
      imagem: recipe.image,
      rendimento: Number(recipe.servings),
      tempoPreparo: {
        horas: Number(recipe.prepTime.hours),
        minutos: Number(recipe.prepTime.minutes),
      },
      listaPreparo: recipe.directions.map((direction) => {
        return { descricao: direction };
      }),
      ingredientes: recipe.ingredients.map((ingredient) => {
        // TODO: ver quantidade com o back
        return { quantidade: 1, descricao: ingredient };
      }),
    };
  };

  const handleSubmit = (
    values: IRecipeCreationFields,
    { setSubmitting }: FormikHelpers<IRecipeCreationFields>
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
        touched,
        isSubmitting,
        submitForm,
        setFieldValue,
        setFieldTouched,
      }) => (
        <Form>
          <br />
          <br />
          {JSON.stringify(values)}
          <br />
          <br />
          {JSON.stringify(errors)}
          <br />
          <br />
          {JSON.stringify(touched)}
          <br />
          <br />
          <RecipeCreationFields
            values={values}
            errors={errors}
            loading={isSubmitting}
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
          />
          <br />
          <br />
          <LoadingButton loading={isSubmitting} onClick={submitForm}>
            Cadastrar
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
}
