import { Formik, Form, FormikHelpers } from "formik";
import Button from "@mui/material/Button";
import { IRecipeCreate } from "../../../interfaces/interfaces.tsx";
import { createRecipe } from "../../../services/Api.tsx";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";
import RecipeCreationFields from "./RecipeCreationFields.tsx";
import RecipeCreationSchema, {
  initialValues,
} from "./RecipeCreationSchema.tsx";

const recipeToBack = (recipe: IRecipeCreationFields): IRecipeCreate => {
  return {
    titulo: recipe.title,
    descricao: recipe.description,
    rendimento: recipe.servings,
    tempoPreparo: {
      horas: recipe.prepTime.hours,
      minutos: recipe.prepTime.minutes,
    },
    listaPreparo: recipe.directions.map((recipe) => {
      return { descricao: recipe };
    }),
    ingredientes: recipe.ingredients.map((recipe) => {
      return { quantidade: 1, descricao: recipe };
    }),
    imagem: recipe.image,
  };
};

const handleSubmit = (
  values: IRecipeCreationFields,
  { setSubmitting }: FormikHelpers<IRecipeCreationFields>
) => {
  const recipe = recipeToBack(values);
  console.log(recipe);
  createRecipe(recipe, setSubmitting);
};

export default function RecipeCreationForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RecipeCreationSchema}
      onSubmit={handleSubmit}>
      {({ values, submitForm, isSubmitting }) => (
        <Form>
          {JSON.stringify(values)}

          <RecipeCreationFields values={values} />

          <br />
          <br />
          <Button
            variant="contained"
            disabled={isSubmitting}
            onClick={submitForm}>
            Cadastrar
          </Button>
        </Form>
      )}
    </Formik>
  );
}
