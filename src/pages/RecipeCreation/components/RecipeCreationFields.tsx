import { Field, FormikErrors } from "formik";
import { TextField } from "formik-mui";
import Typography from "@mui/material/Typography";
import TextArrayInput from "../../../components/Forms/TextArrayInput.tsx";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";
import Grid from "@mui/material/Grid";
import { ChangeEvent } from "react";
import TextInput from "../../../components/Forms/TextInput.tsx";
import IntegerNumberInput from "../../../components/Forms/IntegerNumberInput.tsx";

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
      <TextInput required name="title" label="Título" />
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
      <TextInput name="description" label="Descrição" />
      <Field
        fullWidth
        component={TextField}
        name="description"
        type="text"
        label="Descrição"
      />
      <br />
      <br />
      <TextInput name="image" label="Imagem" />
      <Field
        fullWidth
        component={TextField}
        name="image"
        type="text"
        label="Imagem"
      />
      <br />
      <br />
      <IntegerNumberInput
        name="servings"
        label="Rendimento"
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
      />
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
      <Grid container wrap="nowrap">
        <IntegerNumberInput
          name="prepTime.hours"
          label="Horas"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
        />
        <IntegerNumberInput
          name="prepTime.minutes"
          label="Minutos"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
        />
      </Grid>
      <br />
      <br />
      <TextArrayInput
        title="Ingredientes *"
        name="ingredients"
        label="Ingrediente"
        values={values.ingredients}
        errors={errors.ingredients}
      />
      <br />
      <br />
      <TextArrayInput
        title="Modo de Preparo *"
        name="directions"
        label="Instrução"
        values={values.directions}
        errors={errors.directions}
      />
    </>
  );
}
