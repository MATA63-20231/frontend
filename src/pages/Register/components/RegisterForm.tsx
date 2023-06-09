import { Formik, Form, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { IUserRegister } from "../../../interfaces/AuthInterfaces.tsx";
import { signUp } from "../../../services/AuthApi.tsx";
import RegisterFields from "./RegisterFields.tsx";
import LoadingButton from "../../../components/LoadingButton.tsx";
import RegisterSchema, { initialValues } from "../schemas/RegisterSchema.tsx";

export default function RegisterForm() {
  const navigate = useNavigate();
  const handleSubmit = (
    values: IUserRegister,
    { setSubmitting }: FormikHelpers<IUserRegister>,
  ) => {
    signUp(values, navigate, setSubmitting);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, submitForm }) => (
        <Form>
          <RegisterFields />

          <Grid sx={{ py: 3 }}>
            <LoadingButton loading={isSubmitting} onClick={submitForm}>
              Cadastrar
            </LoadingButton>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
