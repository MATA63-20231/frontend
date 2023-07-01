import { Field, FormikErrors } from "formik";
import { TextField } from "formik-mui";
import TextField2 from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ArrayInput from "../../../components/ArrayInput.tsx";
import { IRecipeCreationFields } from "../interfaces/RecipeCreationInterfaces.tsx";
import { NumericFormat } from "react-number-format";
import Grid from "@mui/material/Grid";
import { ChangeEvent, FormEvent } from "react";

interface IProps {
  values: IRecipeCreationFields;
  errors: FormikErrors<IRecipeCreationFields>;
  setFieldValue: any;
  setFieldTouched: any;
}

// function foo() {
//   return (
//     <NumericFormat
//       fullWidth
//       // allowNegative={false}
//       decimalScale={0}
//       customInput={TextField}
//     />
//   );
// }

// function bar({ target }: any) {
//   console.log(target.value);
// }

// const NumberField = () => (
//   <TextField name="foo" field={Field}  onChange={(foo) => console.log(foo)}></TextField>
// );

const aaaaaaaa = ({ target }: any) => {
  const value = target.value || "";
  console.log(value);
  // setFieldValue("servings", value.toLowerCase());
};

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
      {/* <br />
      <br />
      <Field
        required
        fullWidth
        component={TextField}
        name="servings"
        type="text"
        label="Rendimento"
      /> */}
      <br />
      <br />
      <Field
        required
        fullWidth
        component={TextField}
        name="servings"
        type="text"
        label="Rendimento"
        // onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
        //   const previousValue = values.servings;
        //   const value = target.value;
        //   const valueNum = Number(value);
        //   const valueIsNaN = isNaN(valueNum);
        //   const previousValue_str = String(previousValue);
        //   const valueNum_str = String(valueNum);

        //   const finalValue = valueIsNaN ? previousValue_str : valueNum_str;
        //   console.log({
        //     previousValue,
        //     previousValue_str,
        //     value,
        //     valueNum,
        //     valueNum_str,
        //     valueIsNaN,
        //     finalValue,
        //   });
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
          // onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
          //   const value = target.value;

          //   const hasOnlyNumbers = Boolean(value.match(/^[0-9]+$/));
          //   const startsWithZero = value !== "0" && Boolean(value.match(/^0+/));

          //   const shouldUpdate = hasOnlyNumbers && !startsWithZero;

          //   // const strMatch = Boolean(value.match(/^[0-9]+$/));
          //   // const strMatch2 = !Boolean(value.match(/^0+/));
          //   // const cond = strMatch && strMatch2;

          //   // const finalValue = strMatch ? Number(value) : previousValue;

          //   if (shouldUpdate) {
          //     setFieldValue("servings", value).then(() => {
          //       setFieldTouched("servings");
          //     });
          //   }

          //   console.log({
          //     hasOnlyNumbers,
          //     startsWithZero,
          //     shouldUpdate,
          //     //   previousValue,
          //     //   value,
          //     // strMatch,
          //     // strMatch2,
          //     // cond,
          //     //   // finalValue,
          //   });
          // await setFieldValue("servings", finalValue);
          // setFieldTouched("servings");
        }}
      />
      {/* <input
        type="text"
        name="servings"
        placeholder="Rendimento"
        onChange={(e) => {
          const value = e.target.value || "";
          setFieldValue("servings", value.toLowerCase());
        }}
        onBlur={handleBlur}
        value={values.servings}
      /> */}
      {/* <NumericFormat
        fullWidth
        customInput={Field}
        component={TextField}
        // allowNegative={false}
        decimalScale={0}
        name="servings"
        type="text"
        label="Rendimento"
      /> */}
      <br />
      <br />
      <Typography sx={{ mb: 1 }}>Tempo de Preparo *</Typography>
      <Grid container wrap="nowrap">
        {/* <Field
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
      /> */}
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
