import { Formik, Form, FormikHelpers } from "formik";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { IRegister } from "../../../interfaces/AuthInterfaces.tsx";
import { signUp } from "../../../services/AuthApi.tsx";
import RegisterFields from "./RegisterFields.tsx";
import RegisterSchema, { initialValues } from "../schemas/RegisterSchema.tsx";

import LoadingButton from "../../../components/LoadingButton.tsx";

export default function RegisterForm() {
  const navigate = useNavigate();
  const handleSubmit = (
    values: IRegister,
    { setSubmitting }: FormikHelpers<IRegister>,
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
