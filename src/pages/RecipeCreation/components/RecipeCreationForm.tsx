import * as Yup from "yup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import FormErrorMessages from "../../../enums/errorMessages";
import ArrayInput from "./ArrayInput";

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
  const initialValues: IFields = {
    recipeTitle: "",
    ingredients: [""],
    directions: [""],
  };

  const handleSubmit = (
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
      onSubmit={handleSubmit}>
      {({ values, submitForm, isSubmitting }) => (
        <Form>
          <Field
            fullWidth
            component={TextField}
            name="recipeTitle"
            type="text"
            label="Título da Receita"
          />

          <br />
          <br />
          <Typography> Ingredientes</Typography>
          <ArrayInput
            inputName="ingredients"
            inputValues={values.ingredients}
          />

          <br />
          <br />
          <Typography> Modo de Preparo</Typography>
          <ArrayInput inputName="directions" inputValues={values.directions} />

          <br />
          <br />
          <Button
            variant="contained"
            disabled={isSubmitting}
            onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
