import { FormikErrors } from "formik";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";
import TextInput from "../../../components/CustomInputs/TextInput.tsx";
import TextArrayInput from "../../../components/CustomInputs/TextArrayInput.tsx";
import IntegerNumberInput from "../../../components/CustomInputs/IntegerNumberInput.tsx";
import DragAndDropImagesInput from "../../../components/CustomInputs/DragAndDropImagesInput/DragAndDropImagesInput.tsx";

interface IProps {
  values: IRecipeCreationFields;
  errors: FormikErrors<IRecipeCreationFields>;
  loading: boolean;
  setFieldValue: (
    field: string,
    value: string
  ) => Promise<void | FormikErrors<IRecipeCreationFields>>;
  setFieldTouched: (field: string) => void;
}

export default function RecipeCreationFields({
  values,
  errors,
  loading,
  setFieldValue,
  setFieldTouched,
}: IProps) {
  const fileTypes = ["JPG", "JPEG", "PNG", "GIF", "SVG"];
  const handleChange = (file: FileList) => {
    console.log(file);
  };

  return (
    <>
      <TextInput required name="title" label="Título" />
      <br />
      <br />
      <TextInput name="description" label="Descrição" />
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
        loading={loading}
      />
      <br />
      <br />
      <TextArrayInput
        title="Modo de Preparo *"
        name="directions"
        label="Instrução"
        values={values.directions}
        errors={errors.directions}
        loading={loading}
      />
      <br />
      <br />
      {/* <TextInput name="image" label="Imagem" /> */}
      <Typography sx={{ mb: 1 }}>Imagens</Typography>
      <DragAndDropImagesInput />
      <br />
    </>
  );
}
