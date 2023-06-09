import { SnackbarProvider } from "notistack";
import CustomSnackBar from "./CustomSnackBar.tsx";

export default function CustomSnackBarProvider() {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      Components={{
        success: CustomSnackBar,
        error: CustomSnackBar,
        warning: CustomSnackBar,
        info: CustomSnackBar,
      }}
    />
  );
}
