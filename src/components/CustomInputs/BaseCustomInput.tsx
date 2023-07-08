import { Field } from "formik";
import { TextField } from "formik-mui";
import { ChangeEvent, ReactNode } from "react";

interface IProps {
  type: "text" | "email" | "password";
  name: string;
  label: string;
  size?: string;
  required?: boolean;
  endAdornment?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function BaseCustomInput({
  type,
  name,
  label,
  size,
  required,
  endAdornment,
  onChange,
}: IProps) {
  return (
    <Field
      fullWidth
      component={TextField}
      type={type}
      name={name}
      label={label}
      size={size}
      required={required}
      InputProps={{ endAdornment }}
      onChange={onChange}
    />
  );
}

BaseCustomInput.defaultProps = {
  required: false,
  size: "medium",
  endAdornment: null,
  onChange: null,
};
