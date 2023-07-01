import { ChangeEvent } from "react";
import { Field, FormikErrors } from "formik";
import TextField from "formik-mui";

interface IProps<FormFieldsType> {
  name: string;
  label: string;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<FormFieldsType>>;
  setFieldTouched: (
    field: string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ) => void;
}

export default function IntegerNumberInput<FormFieldsType>({
  name,
  label,
  setFieldValue,
  setFieldTouched,
}: IProps<FormFieldsType>) {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value;

    const isEmptyString = value === "";
    const hasOnlyNumbers = Boolean(value.match(/^[0-9]+$/));
    const startsWithZero = value !== "0" && Boolean(value.match(/^0+/));

    const finalValue = startsWithZero ? value.replace(/^0+/, "") : value;

    if (isEmptyString || hasOnlyNumbers) {
      setFieldValue(name, finalValue).then(() => {
        setFieldTouched(name);
      });
    }
  };

  return (
    <Field
      required
      fullWidth
      type="text"
      component={TextField}
      name={name}
      label={label}
      onChange={handleChange}
    />
  );
}
