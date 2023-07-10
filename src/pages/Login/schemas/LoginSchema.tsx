import * as Yup from "yup";
import { ILogin } from "../../../interfaces/AuthInterfaces.tsx";
import FormErrorMessages from "../../../enums/FormErrorMessages.tsx";

export const initialValues: ILogin = {
  usuario: "",
  senha: "",
};

const LoginSchema = Yup.object<ILogin>().shape({
  usuario: Yup.string().required(FormErrorMessages.REQUIRED),
  senha: Yup.string().required(FormErrorMessages.REQUIRED),
});

export default LoginSchema;
