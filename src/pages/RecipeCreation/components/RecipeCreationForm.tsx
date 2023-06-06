import * as Yup from "yup";
import { Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import FormErrorMessages from "../../../enums/errorMessages";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, FormErrorMessages.MIN_2)
    .max(255, FormErrorMessages.MAX_255)
    .required(FormErrorMessages.REQUIRED),

  lastName: Yup.string()
    .min(2, FormErrorMessages.MIN_2)
    .max(255, FormErrorMessages.MAX_255)
    .required(FormErrorMessages.REQUIRED),

  email: Yup.string()
    .email(FormErrorMessages.INVALID_EMAIL)
    .required(FormErrorMessages.REQUIRED),
});

export default function RecipeCreationForm() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}>
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="firstName"
            type="text"
            label="First Name"
          />

          <Field
            component={TextField}
            name="lastName"
            type="text"
            label="Last Name"
          />

          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
          />

          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
