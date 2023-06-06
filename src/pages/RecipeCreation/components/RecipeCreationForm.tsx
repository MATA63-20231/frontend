import * as Yup from "yup";
import Button from "@mui/material/Button";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import FormErrorMessages from "../../../enums/errorMessages";

const RecipeCreationSchema = Yup.object().shape({
  recipeTitle: Yup.string()
    .min(2, FormErrorMessages.MIN_2)
    .max(255, FormErrorMessages.MAX_255)
    .required(FormErrorMessages.REQUIRED),

  ingredient: Yup.string()
    .min(2, FormErrorMessages.MIN_2)
    .max(255, FormErrorMessages.MAX_255)
    .required(FormErrorMessages.REQUIRED),

  directions: Yup.string()
    .min(2, FormErrorMessages.MIN_2)
    .max(255, FormErrorMessages.MAX_255)
    .required(FormErrorMessages.REQUIRED),
});

export default function RecipeCreationForm() {
  return (
    <Formik
      initialValues={{
        recipeTitle: "",
        ingredient: "",
        directions: "",
      }}
      validationSchema={RecipeCreationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}>
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            fullWidth
            name="recipeTitle"
            type="text"
            label="Título da Receita"
          />

          <Field
            component={TextField}
            fullWidth
            name="ingredient"
            type="text"
            label="Ingredientes"
          />

          <Field
            component={TextField}
            fullWidth
            name="directions"
            type="text"
            label="Modo de Preparo"
          />

          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
