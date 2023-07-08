import BaseCustomInput from "./BaseCustomInput.tsx";

interface IProps {
  name: string;
  label: string;
  size?: string;
  required?: boolean;
}

export default function TextInput({
  name,
  label,
  size,
  required,
}: IProps) {
  return (
    <BaseCustomInput
      type="text"
      name={name}
      label={label}
      size={size}
      required={required}
    />
  );
}

TextInput.defaultProps = { required: false, size: "medium" };
