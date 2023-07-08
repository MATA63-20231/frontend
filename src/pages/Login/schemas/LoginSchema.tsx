import * as Yup from "yup";
import { ILoginData } from "../../../interfaces/AuthInterfaces.tsx";
import FormErrorMessages from "../../../enums/FormErrorMessages.tsx";

export const initialValues: ILoginData = {
  usuario: "",
  senha: "",
};

const LoginSchema = Yup.object<ILoginData>().shape({
  usuario: Yup.string().required(FormErrorMessages.REQUIRED),
  senha: Yup.string().required(FormErrorMessages.REQUIRED),
});

export default LoginSchema;
