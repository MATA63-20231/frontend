import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import BaseCustomInput from "./BaseCustomInput.tsx";

interface IProps {
  name: string;
  label: string;
  required?: boolean;
}

export default function PasswordInput({ name, label, required }: IProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <BaseCustomInput
      name={name}
      label={label}
      required={required}
      type={showPassword ? "text" : "password"}
      endAdornment={(
        <InputAdornment position="end">
          <IconButton
            aria-label={`${showPassword ? "Ocultar" : "Mostrar"} senha`}
            onClick={handleClickShowPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      )}
    />
  );
}

PasswordInput.defaultProps = { required: false };
