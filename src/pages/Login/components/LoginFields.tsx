import { FormikErrors } from "formik";
import TextInput from "../../../components/CustomInputs/TextInput.tsx";
import { ILoginData } from "../../../interfaces/interfaces.tsx";

interface IProps {
  values: ILoginData;
  errors: FormikErrors<ILoginData>;
  loading: boolean;
  setFieldValue: (
    field: string,
    value: string
  ) => Promise<void | FormikErrors<ILoginData>>;
  setFieldTouched: (field: string) => void;
}

export default function RecipeCreationFields() {
  return (
    <>
      <TextInput required name="usuario" label="Usuário" />
      <br />
      <br />
      <TextInput name="senha" label="Senha" type="password" />
    </>
  );
}
