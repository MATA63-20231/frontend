import { ChangeEvent } from "react";
import { FormikErrors } from "formik";
import BaseCustomInput from "./BaseCustomInput.tsx";

interface IProps<FormFieldsType> {
  name: string;
  label: string;
  required?: boolean;
  setFieldValue: (
    field: string,
    value: string
  ) => Promise<void | FormikErrors<FormFieldsType>>;
  setFieldTouched: (field: string) => void;
}

export default function IntegerNumberInput<FormFieldsType>({
  name,
  label,
  required,
  setFieldValue,
  setFieldTouched,
}: IProps<FormFieldsType>) {
  // Removes non numeric chars and leading zeros
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setFieldValue(
      name,
      value.replace(/[^\d]+/g, "").replace(/^0+(\d)/, "$1"),
    ).then(() => {
      setFieldTouched(name);
    });
  };

  return (
    <BaseCustomInput
      type="text"
      name={name}
      label={label}
      required={required}
      onChange={handleChange}
    />
  );
}

IntegerNumberInput.defaultProps = { required: false };
