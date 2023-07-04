import { Field } from "formik";
import { TextField } from "formik-mui";

interface IProps {
  name: string;
  label: string;
  size?: string;
  required?: boolean;
  type?: "text" | "email" | "password";
}

export default function TextInput({
  name,
  label,
  size,
  required,
  type,
}: IProps) {
  return (
    <Field
      fullWidth
      type={type}
      component={TextField}
      size={size}
      required={required}
      name={name}
      label={label}
    />
  );
}

TextInput.defaultProps = { required: false, size: "medium", type: "text" };
