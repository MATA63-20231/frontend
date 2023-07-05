import * as Yup from "yup";
import YupHelpers from "../../../enums/YupHelpers.tsx";
import { ILoginData } from "../../../interfaces/AuthInterfaces.tsx";

export const initialValues: ILoginData = {
  usuario: "",
  senha: "",
};

const LoginSchema = Yup.object<ILoginData>().shape({
  usuario: YupHelpers.STRING_REQUIRED,
  senha: YupHelpers.STRING_REQUIRED,
});

export default LoginSchema;
