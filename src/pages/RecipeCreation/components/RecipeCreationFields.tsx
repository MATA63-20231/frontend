import { Field, FormikErrors } from "formik";
import { TextField } from "formik-mui";
import Typography from "@mui/material/Typography";
import ArrayInput from "../../../components/ArrayInput.tsx";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";
import Grid from "@mui/material/Grid";
import { ChangeEvent } from "react";

interface IProps {
  values: IRecipeCreationFields;
  errors: FormikErrors<IRecipeCreationFields>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<IRecipeCreationFields>>;
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => void;
}

export default function RecipeCreationFields({
  values,
  errors,
  setFieldValue,
  setFieldTouched,
}: IProps) {
  return (
    <>
      <br />
      <br />
      <Field
        required
        fullWidth
        component={TextField}
        name="title"
        type="text"
        label="Título"
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
        name="image"
        type="text"
        label="Imagem"
      />
      <br />
      <br />
      <Field
        required
        fullWidth
        component={TextField}
        name="servings"
        type="text"
        label="Rendimento"
        onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
          const value = target.value;

          const isEmptyString = value === "";
          const hasOnlyNumbers = Boolean(value.match(/^[0-9]+$/));
          const startsWithZero = value !== "0" && Boolean(value.match(/^0+/));

          const finalValue = startsWithZero ? value.replace(/^0+/, "") : value;

          if (isEmptyString || hasOnlyNumbers) {
            setFieldValue("servings", finalValue).then(() => {
              setFieldTouched("servings");
            });
          }
        }}
      />
      <br />
      <br />
      <Typography sx={{ mb: 1 }}>Tempo de Preparo *</Typography>
      <Grid container wrap="nowrap">
        <Field
          required
          fullWidth
          component={TextField}
          name="prepTime.hours"
          type="text"
          label="Horas"
        />
        <Field
          required
          fullWidth
          component={TextField}
          name="prepTime.minutes"
          type="text"
          label="Minutos"
        />
      </Grid>
      <br />
      <br />
      <Typography>Ingredientes *</Typography>
      <ArrayInput
        name="ingredients"
        label="Ingrediente"
        values={values.ingredients}
        errors={errors.ingredients}
      />
      <br />
      <br />
      <Typography>Modo de Preparo *</Typography>
      <ArrayInput
        name="directions"
        label="Instrução"
        values={values.directions}
        errors={errors.directions}
      />
    </>
  );
}
