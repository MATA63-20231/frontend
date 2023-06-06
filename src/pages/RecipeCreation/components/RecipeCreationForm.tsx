import * as Yup from "yup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import FormErrorMessages from "../../../enums/errorMessages";
import { useState } from "react";

interface IFields {
  recipeTitle: string;
  ingredients: string[];
  directions: string[];
}

const RecipeCreationSchema = Yup.object().shape({
  recipeTitle: Yup.string()
    .min(2, FormErrorMessages.MIN_CHAR_2)
    .max(255, FormErrorMessages.MAX_255)
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
});

export default function RecipeCreationForm() {
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [directions, setDirections] = useState<string[]>([""]);

  const initialValues = {
    recipeTitle: "",
    ingredients,
    directions,
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const addStep = () => {
    setDirections([...directions, ""]);
  };

  const onSubmit = (
    values: IFields,
    { setSubmitting }: FormikHelpers<IFields>
  ) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RecipeCreationSchema}
      onSubmit={onSubmit}>
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            fullWidth
            name="recipeTitle"
            type="text"
            label="Título da Receita"
          />
          <Typography> Ingredientes</Typography>
          {ingredients.map((_, index) => (
            <Field
              component={TextField}
              size="small"
              fullWidth
              name={`ingredients[${index}]`}
              type="text"
            />
          ))}
          <Button onClick={addIngredient}>Adicionar ingrediente</Button>
          <br />
          <br />
          <Typography> Modo de Preparo</Typography>
          {directions.map((_, index) => (
            <Field
              component={TextField}
              size="small"
              fullWidth
              name={`directions[${index}]`}
              type="text"
            />
          ))}
          <Button onClick={addStep}>Adicionar passo</Button>
          <br />
          <br />
          <Button color="primary" disabled={isSubmitting} onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
