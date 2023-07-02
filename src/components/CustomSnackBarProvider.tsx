import {
  CustomContentProps,
  SnackbarContent,
  SnackbarKey,
  SnackbarProvider,
  closeSnackbar,
} from "notistack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { forwardRef } from "react";

const foo = forwardRef<HTMLDivElement, CustomContentProps>((_, ref) => (
  <div ref={ref}>
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
    </Alert>
  </div>
  // <SnackbarContent ref={ref}>
  //   <Alert severity="success">
  //     <AlertTitle>Success</AlertTitle>
  //     This is a success alert — <strong>check it out!</strong>
  //   </Alert>
  // </SnackbarContent>
));

export default function CustomSnackBarProvider() {
  const action = (snackbarId: SnackbarKey) => {
    return (
      <>
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => closeSnackbar(snackbarId)}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </>
    );
  };

  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      action={action}
      Components={{
        success: foo,
      }}
    />
  );
}
