import { Formik, Form, FormikHelpers } from "formik";
import { IRecipeCreate } from "../../../interfaces/interfaces.tsx";
import { createRecipe } from "../../../services/Api.tsx";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";
import RecipeCreationFields from "./RecipeCreationFields.tsx";
import RecipeCreationSchema, {
  initialValues,
} from "../schemas/RecipeCreationSchema.tsx";
import LoadingButton from "../../../components/LoadingButton.tsx";

const recipeToBack = (recipe: IRecipeCreationFields): IRecipeCreate => {
  return {
    titulo: recipe.title,
    descricao: recipe.description,
    rendimento: recipe.servings,
    tempoPreparo: {
      horas: recipe.prepTime.hours,
      minutos: recipe.prepTime.minutes,
    },
    listaPreparo: recipe.directions.map((direction) => {
      return { descricao: direction };
    }),
    ingredientes: recipe.ingredients.map((ingredient) => {
      // TODO: ver quantidade com o back
      return { quantidade: 1, descricao: ingredient };
    }),
    imagem: recipe.image,
  };
};

const handleSubmit = (
  values: IRecipeCreationFields,
  { setSubmitting }: FormikHelpers<IRecipeCreationFields>
) => {
  const recipe = recipeToBack(values);
  createRecipe(recipe, setSubmitting);
};

export default function RecipeCreationForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RecipeCreationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, submitForm, isSubmitting }) => (
        <Form>
          {JSON.stringify(values)}

          <RecipeCreationFields values={values} />

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
