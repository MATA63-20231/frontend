import { Field } from "formik";
import TextField from "formik-mui";

interface IProps {
  name: string;
  label: string;
  size?: string;
  required?: boolean;
}

export default function TextInput({ name, label, required }: IProps) {
  return (
    <Field
      fullWidth
      type="text"
      component={TextField}
      required={required}
      name={name}
      label={label}
    />
  );
}

TextInput.defaultProps = { required: false, size: "medium" };
