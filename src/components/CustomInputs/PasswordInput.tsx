import { useState } from "react";
import TextInput from "./TextInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

interface IProps {
  name: string;
  label: string;
  size?: string;
  required?: boolean;
}

export default function PasswordInput({ name, label }: IProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextInput
      required
      name={name}
      label={label}
      type={showPassword ? "text" : "password"}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label={`${showPassword ? "Ocultar" : "Mostrar"} senha`}
            onClick={handleClickShowPassword}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
}

TextInput.defaultProps = { required: false, size: "medium", type: "text" };
