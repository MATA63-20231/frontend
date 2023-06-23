import { Field } from "formik";
import { TextField } from "formik-mui";
import Typography from "@mui/material/Typography";
import ArrayInput from "./ArrayInput.tsx";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";

interface IProps {
  values: IRecipeCreationFields;
}

export default function RecipeCreationFields({ values }: IProps) {
  return (
    <>
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
      <ArrayInput inputName="ingredients" inputValues={values.ingredients} />

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
    </>
  );
}
