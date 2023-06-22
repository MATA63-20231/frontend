import * as Yup from "yup";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import { useState } from "react";
import FormErrorMessages from "../../../enums/errorMessages";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

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

  const handleChange = (values: any) => {
    console.log(values);
  };


  const deleteIngredient = (index: number) => {
    console.log("delete", index);

    const newIngredients = [...ingredients];

    newIngredients.splice(index, 1);

    setIngredients(newIngredients);

    console.log(ingredients, newIngredients)

  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RecipeCreationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, submitForm, isSubmitting }) => (
        <Form 
        onChange={() => handleChange(values)}>
          <p>{values.recipeTitle}</p>
          <p>{values.ingredients}</p>
          <p>{values.directions}</p>
          <Field
            fullWidth
            component={TextField}
            name="recipeTitle"
            type="text"
            label="Título da Receita"
          />
          <Typography> Ingredientes</Typography>

          {ingredients.map((_, index) => (
            <Grid
              container
              alignItems="flex-start"
              key={`ingredients[${index}]`}
              sx={{ py: 0.5 }}
            >
              <Grid item xs={10.7}>
                <Field
                  fullWidth
                  component={TextField}
                  size="small"
                  name={`ingredients[${index}]`}
                  type="text"
                />
              </Grid>
              <Grid item xs>
                <IconButton onClick={() => deleteIngredient(index)}>
                  <DeleteIcon sx={{ fontSize: 30, color: "secondary.main" }} />
                </IconButton>
              </Grid>
            </Grid>
          ))}

          <Button onClick={addIngredient}>Adicionar ingrediente</Button>
          <br />
          <br />
          <Typography> Modo de Preparo</Typography>
          {directions.map((_, index) => (
            <Field
              fullWidth
              component={TextField}
              size="small"
              key={`directions[${index}]`}
              name={`directions[${index}]`}
              type="text"
            />
          ))}
          <Button onClick={addStep}>Adicionar passo</Button>
          <br />
          <br />
          <Button
            variant="contained"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
