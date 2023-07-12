import { FormikErrors } from "formik";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IRecipeFormFields } from "../../../interfaces/RecipeInterfaces.tsx";
import TextInput from "../../../components/CustomInputs/TextInput.tsx";
import TextArrayInput from "../../../components/CustomInputs/TextArrayInput.tsx";
import IntegerNumberInput from "../../../components/CustomInputs/IntegerNumberInput.tsx";
import DragAndDropImagesInput from "../../../components/CustomInputs/DragAndDropImagesInput/DragAndDropImagesInput.tsx";

interface IProps {
  values: IRecipeFormFields;
  errors: FormikErrors<IRecipeFormFields>;
  loading: boolean;
  acceptedFileTypes: string[];
  acceptedFileTypesStr: string;
  maxFileSizeMB: number;
  maxFilesAmount: number;
  setFieldValue: (
    field: string,
    // It's a Formik type so we can't change it
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
  ) => Promise<void | FormikErrors<IRecipeFormFields>>;
  setFieldTouched: (field: string) => void;
}

export default function RecipeFields({
  values,
  errors,
  loading,
  acceptedFileTypes,
  acceptedFileTypesStr,
  maxFileSizeMB,
  maxFilesAmount,
  setFieldValue,
  setFieldTouched,
}: IProps) {
  return (
    <Grid
      container
      rowSpacing={3}
      sx={{
        flexDirection: "column",
        textAlign: "initial",
        color: "secondary.main",
      }}
    >
      <Grid item>
        <TextInput required name="title" label="Título" />
      </Grid>

      <Grid item>
        <TextInput name="description" label="Descrição" />
      </Grid>

      <Grid item>
        <IntegerNumberInput
          required
          name="servings"
          label="Rendimento"
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
        />
      </Grid>

      <Grid item>
        <Typography sx={{ my: 1 }}>Tempo de Preparo *</Typography>
        <Grid container columnGap={2} wrap="nowrap">
          <IntegerNumberInput
            required
            name="prepTime.hours"
            label="Horas"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
          />
          <IntegerNumberInput
            required
            name="prepTime.minutes"
            label="Minutos"
            setFieldValue={setFieldValue}
            setFieldTouched={setFieldTouched}
          />
        </Grid>
      </Grid>

      <Grid item>
        <TextArrayInput
          title="Ingredientes *"
          label="Ingrediente"
          name="ingredients"
          values={values.ingredients}
          errors={errors.ingredients}
          loading={loading}
        />
      </Grid>

      <Grid item>
        <TextArrayInput
          title="Modo de Preparo *"
          label="Instrução"
          name="directions"
          values={values.directions}
          errors={errors.directions}
          loading={loading}
        />
      </Grid>

      <Grid item>
        <DragAndDropImagesInput
          title="Fotos da receita"
          label="Arraste e solte as fotos da sua receita aqui"
          name="images"
          images={values.images}
          errors={errors.images}
          loading={loading}
          acceptedFileTypes={acceptedFileTypes}
          acceptedFileTypesStr={acceptedFileTypesStr}
          maxFileSizeMB={maxFileSizeMB}
          maxFilesAmount={maxFilesAmount}
          setFieldValue={setFieldValue}
        />
      </Grid>
    </Grid>
  );
}
