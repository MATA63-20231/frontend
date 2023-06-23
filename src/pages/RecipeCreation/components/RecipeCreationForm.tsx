import * as Yup from "yup";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormErrorMessages from "../../../enums/errorMessages.tsx";
import ArrayInput from "./ArrayInput.tsx";

interface IFields {
  title: string;
  description: string;
  servings: number;
  prepTime: {
    hours: number;
    minutes: number;
  };
  ingredients: string[];
  directions: string[];
  image: string;
}

const RecipeCreationSchema = Yup.object<IFields>().shape({
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
  const initialValues: IFields = {
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

  const handleSubmit = (
    values: IFields,
    { setSubmitting }: FormikHelpers<IFields>
  ) => {
    // eslint-disable-next-line no-console
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
      // eslint-disable-next-line no-alert
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
          {JSON.stringify(values)}
          <br />
          <br />
          <Field
            fullWidth
            component={TextField}
            name="title"
            type="text"
            label="Título da Receita"
          />

          <br />
          <br />
          <Field
            fullWidth
            component={TextField}
            name="description"
            type="text"
            label="Descrição"
          />

          <br />
          <br />
          <Field
            fullWidth
            component={TextField}
            name="servings"
            type="text"
            label="Rendimento"
          />

          <br />
          <br />
          <Typography>Tempo de Preparo</Typography>
          <Field
            component={TextField}
            name="prepTime.hours"
            type="text"
            label="Horas"
          />
          <Field
            component={TextField}
            name="prepTime.minutes"
            type="text"
            label="Minutos"
          />

          <br />
          <br />
          <Typography>Ingredientes</Typography>
          <ArrayInput
            inputName="ingredients"
            inputValues={values.ingredients}
          />

          <br />
          <br />
          <Typography>Modo de Preparo</Typography>
          <ArrayInput inputName="directions" inputValues={values.directions} />

          <br />
          <br />
          <Field
            fullWidth
            component={TextField}
            name="image"
            type="text"
            label="Imagem"
          />

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
