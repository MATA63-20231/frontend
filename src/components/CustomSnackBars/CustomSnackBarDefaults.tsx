import { AlertColor } from "@mui/material/Alert";

type IDefaultsMapping = {
  [key in AlertColor]: {
    defaultTitle: string;
    defaultMessage?: string;
  };
};

const CustomSnackBarDefaults: IDefaultsMapping = {
  success: {
    defaultTitle: "Sucesso",
    defaultMessage: "Sua solicitação foi processada com sucesso!",
  },

  error: {
    defaultTitle: "Algo deu errado :(",
    defaultMessage: "Por favor, tente novamente mais tarde.",
  },

  warning: {
    defaultTitle: "Atenção",
  },

  info: {
    defaultTitle: "Informação",
  },
};

export default CustomSnackBarDefaults;
