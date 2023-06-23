import * as Yup from "yup";
import { Formik, Form, FormikHelpers } from "formik";
import Button from "@mui/material/Button";
import FormErrorMessages from "../../../enums/errorMessages.tsx";
import { IRecipeCreate } from "../../../interfaces/interfaces.tsx";
import { createRecipe } from "../../../services/Api.tsx";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";
import RecipeCreationFields from "./RecipeCreationFields.tsx";

const RecipeCreationSchema = Yup.object<IRecipeCreationFields>().shape({
  title: Yup.string()
    .min(2, FormErrorMessages.MIN_CHAR_2)
    .max(255, FormErrorMessages.MAX_255)
    .required(FormErrorMessages.REQUIRED),

  description: Yup.string()
    .min(2, FormErrorMessages.MIN_CHAR_2)
    .max(255, FormErrorMessages.MAX_255)
    .required(FormErrorMessages.REQUIRED),

  servings: Yup.number()
    .positive(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
    .integer(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
    .typeError(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
    .required(FormErrorMessages.REQUIRED),

  prepTime: Yup.object()
    .shape({
      hours: Yup.number()
        .positive(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
        .integer(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
        .typeError(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
        .required(FormErrorMessages.REQUIRED),
      minutes: Yup.number()
        .positive(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
        .integer(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
        .typeError(FormErrorMessages.INTEGER_POSITIVE_NUMBER)
        .required(FormErrorMessages.REQUIRED),
    })
    .required(FormErrorMessages.REQUIRED),

  ingredients: Yup.array()
    .of(
      Yup.string()
        .min(2, FormErrorMessages.MIN_CHAR_2)
        .max(255, FormErrorMessages.MAX_255)
        .required(FormErrorMessages.REQUIRED)
    )
    .required(FormErrorMessages.REQUIRED),

  directions: Yup.array()
    .of(
      Yup.string()
        .min(2, FormErrorMessages.MIN_CHAR_2)
        .max(255, FormErrorMessages.MAX_255)
        .required(FormErrorMessages.REQUIRED)
    )
    .required(FormErrorMessages.REQUIRED),

  image: Yup.string()
    .min(2, FormErrorMessages.MIN_CHAR_2)
    .max(255, FormErrorMessages.MAX_255)
    .required(FormErrorMessages.REQUIRED),
});

export default function RecipeCreationForm() {
  const initialValues: IRecipeCreationFields = {
    title: "",
    description: "",
    servings: 0,
    prepTime: {
      hours: 0,
      minutes: 0,
    },
    ingredients: [""],
    directions: [""],
    image: "",
  };

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
