import { Formik, Form, FormikHelpers } from "formik";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ILoginData } from "../../../interfaces/AuthInterfaces.tsx";
import { login } from "../../../services/AuthApi.tsx";
import LoginSchema, { initialValues } from "../schemas/LoginSchema.tsx";
import LoginFields from "./LoginFields.tsx";
import LoadingButton from "../../../components/LoadingButton.tsx";

export default function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = (
    values: ILoginData,
    { setSubmitting }: FormikHelpers<ILoginData>,
  ) => {
    login(values, navigate, setSubmitting);
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

          <Grid sx={{ py: 3 }}>
            <LoadingButton loading={isSubmitting} onClick={submitForm}>
              Login
            </LoadingButton>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
