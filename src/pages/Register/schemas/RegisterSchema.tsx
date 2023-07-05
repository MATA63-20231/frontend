import * as Yup from "yup";
import YupHelpers from "../../../enums/YupHelpers.tsx";
import { IRegister } from "../../../interfaces/RecipeInterfaces.tsx";

export const initialValues: IRegister = {
  usuario: "",
  senha: "",
  nome: "",
  email: "",
  confirmacaoSenha: "",
};

const LoginSchema = Yup.object<IRegister>().shape({
  usuario: YupHelpers.STRING_REQUIRED,
  senha: YupHelpers.STRING_REQUIRED,
  nome: YupHelpers.STRING_REQUIRED,
  email: YupHelpers.STRING_REQUIRED,
  confirmacaoSenha: YupHelpers.STRING_REQUIRED,
});

export default LoginSchema;
