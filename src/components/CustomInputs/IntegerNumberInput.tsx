import { ChangeEvent } from "react";
import { Field, FormikErrors } from "formik";
import { TextField } from "formik-mui";

interface IProps<FormFieldsType> {
  name: string;
  label: string;
  setFieldValue: (
    field: string,
    value: string
  ) => Promise<void | FormikErrors<FormFieldsType>>;
  setFieldTouched: (field: string) => void;
}

export default function IntegerNumberInput<FormFieldsType>({
  name,
  label,
  setFieldValue,
  setFieldTouched,
}: IProps<FormFieldsType>) {
  //Removes non numeric chars and leading zeros
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setFieldValue(
      name,
      value.replace(/[^\d]+/g, "").replace(/^0+(\d)/, "$1")
    ).then(() => {
      setFieldTouched(name);
    });
  };

  return (
    <Field
      required
      fullWidth
      type="text"
      inputMode="numeric"
      component={TextField}
      name={name}
      label={label}
      onChange={handleChange}
    />
  );
}
