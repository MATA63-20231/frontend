import * as Yup from "yup";
import YupHelpers from "../../../enums/YupHelpers.tsx";
import { IRegister } from "../../../interfaces/AuthInterfaces.tsx";

export const initialValues: IRegister = {
  usuario: "",
  senha: "",
  nome: "",
  email: "",
  confirmacaoSenha: "",
};

const RegisterSchema = Yup.object<IRegister>().shape({
  usuario: YupHelpers.STRING_REQUIRED,
  senha: YupHelpers.STRING_REQUIRED,
  nome: YupHelpers.STRING_REQUIRED,
  email: YupHelpers.EMAIL_REQUIRED,
  confirmacaoSenha: YupHelpers.STRING_REQUIRED,
});

export default RegisterSchema;
