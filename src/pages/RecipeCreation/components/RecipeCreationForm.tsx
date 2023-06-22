import * as Yup from "yup";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Formik, Form, Field, FieldArray, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import { useState } from "react";
import FormErrorMessages from "../../../enums/errorMessages";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

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
  const [directions, setDirections] = useState<string[]>([""]);

  const initialValues: IFields = {
    recipeTitle: "",
    ingredients: [""],
    directions,
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

          <Typography> Ingredientes</Typography>
          <FieldArray name="ingredients">
            {({ push, remove, swap }) => (
              <>
                {values.ingredients.map((_, index) => (
                  <Grid
                    container
                    alignItems="flex-start"
                    key={`ingredients[${index}]`}
                    sx={{ py: 0.5 }}>
                    {index + 1}
                    <Grid item xs>
                      {index > 0 && (
                        <IconButton onClick={() => swap(index, index - 1)}>
                          <ArrowDropUp
                            sx={{ fontSize: 30, color: "secondary.main" }}
                          />
                        </IconButton>
                      )}
                      {index < values.ingredients.length - 1 && (
                        <IconButton onClick={() => swap(index, index + 1)}>
                          <ArrowDropDown
                            sx={{ fontSize: 30, color: "secondary.main" }}
                          />
                        </IconButton>
                      )}
                    </Grid>

                    <Grid item xs>
                      <Field
                        fullWidth
                        component={TextField}
                        size="small"
                        name={`ingredients[${index}]`}
                        type="text"
                      />
                    </Grid>
                    <Grid item xs>
                      <IconButton onClick={() => remove(index)}>
                        <DeleteIcon
                          sx={{ fontSize: 30, color: "secondary.main" }}
                        />
                      </IconButton>
                    </Grid>
                  </Grid>
                ))}
                <Button onClick={() => push("")}>Adicionar ingrediente</Button>
              </>
            )}
          </FieldArray>

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
            onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
