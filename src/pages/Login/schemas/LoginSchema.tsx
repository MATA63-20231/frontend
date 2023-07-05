import * as Yup from "yup";
import { ILoginData } from "../interfaces/LoginInterface.tsx";
import YupHelpers from "../../../enums/YupHelpers.tsx";

export const initialValues: ILoginData = {
  usuario: "",
  senha: "",
};

const LoginSchema = Yup.object<ILoginData>().shape({
  usuario: YupHelpers.STRING_REQUIRED,
  senha: YupHelpers.STRING_REQUIRED,
});

export default LoginSchema;
