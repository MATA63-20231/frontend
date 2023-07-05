import { Formik, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";

import { ILoginData } from "../../../interfaces/interfaces.tsx";
import { postLogin } from "../../../services/UserApi.tsx";
import LoginFields from "./LoginFields.tsx";
import LoginSchema, { initialValues } from "../schemas/LoginSchema.tsx";

import LoadingButton from "../../../components/LoadingButton.tsx";

export default function LoginForm() {
  const navigate = useNavigate();
  const handleSubmit = (
    values: ILoginData,
    { setSubmitting }: FormikHelpers<ILoginData>
  ) => {
    postLogin(values, navigate, setSubmitting);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, submitForm }) => (
        <Form>

          <LoginFields />

          <LoadingButton loading={isSubmitting} onClick={submitForm}>
            Login
          </LoadingButton>
          
        </Form>
      )}
    </Formik>
  );
}
