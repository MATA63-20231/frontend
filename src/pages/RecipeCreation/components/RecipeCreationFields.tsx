import { FormikErrors } from "formik";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextInput from "../../../components/Forms/TextInput.tsx";
import TextArrayInput from "../../../components/Forms/TextArrayInput.tsx";
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
      <br />
      <br />
      <TextInput name="description" label="Descrição" />
      <br />
      <br />
      <TextInput name="image" label="Imagem" />
      <br />
      <br />
      <IntegerNumberInput
        name="servings"
        label="Rendimento"
        setFieldValue={setFieldValue}
        setFieldTouched={setFieldTouched}
      />
      <br />
      <br />
      <Typography sx={{ mb: 1 }}>Tempo de Preparo *</Typography>
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
