import BaseCustomInput from "./BaseCustomInput.tsx";

interface IProps {
  name: string;
  label: string;
  required?: boolean;
}

export default function EmailInput({ name, label, required }: IProps) {
  return (
    <BaseCustomInput
      type="email"
      name={name}
      label={label}
      required={required}
    />
  );
}

EmailInput.defaultProps = { required: false };
