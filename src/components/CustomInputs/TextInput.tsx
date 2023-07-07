import { Field } from "formik";
import { TextField } from "formik-mui";
import { ReactNode } from "react";

interface IProps {
  name: string;
  label: string;
  size?: string;
  required?: boolean;
  type?: "text" | "email" | "password";
  endAdornment?: ReactNode;
}

export default function TextInput({
  name,
  label,
  size,
  required,
  type,
  endAdornment,
}: IProps) {
  return (
    <Field
      fullWidth
      component={TextField}
      type={type}
      size={size}
      required={required}
      name={name}
      label={label}
      InputProps={{ endAdornment: endAdornment }}
    />
  );
}

TextInput.defaultProps = { required: false, size: "medium", type: "text" };
