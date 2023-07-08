import { CustomContentProps, SnackbarContent, closeSnackbar } from "notistack";
import { forwardRef } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import CustomSnackBarDefaults from "./CustomSnackBarDefaults.tsx";

interface ICustomSnackBarProps extends CustomContentProps {
  title?: string;
}

const CustomSnackBar = forwardRef<HTMLDivElement, ICustomSnackBarProps>(
  (props, ref) => {
    const {
      id, variant, title, message,
    } = props;

    return variant === "default" ? (
      null
    ) : (
      <SnackbarContent ref={ref}>
        <Alert
          sx={{ textAlign: "initial", width: "100%" }}
          variant="filled"
          severity={variant}
        >
          <Grid container justifyContent="space-between" wrap="nowrap">
            <Grid item>
              <AlertTitle>
                {title || CustomSnackBarDefaults[variant].defaultTitle}
              </AlertTitle>
              {message || CustomSnackBarDefaults[variant].defaultMessage}
            </Grid>
            <Grid item sx={{ ml: 1, mt: -0.4 }}>
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => closeSnackbar(id)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        </Alert>
      </SnackbarContent>
    );
  },
);

CustomSnackBar.displayName = "CustomSnackBar";
CustomSnackBar.defaultProps = { title: "" };

export default CustomSnackBar;
