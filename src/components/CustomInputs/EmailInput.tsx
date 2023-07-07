import TextInput from "./TextInput";

interface IProps {
  name: string;
  label: string;
  required?: boolean;
}

export default function EmailInput({ name, label }: IProps) {

  return (
    <TextInput
      required
      name={name}
      label={label}
      type="email"
    />
  );
}

EmailInput.defaultProps = { required: false };
