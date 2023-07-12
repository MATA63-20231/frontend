import { MouseEventHandler, PropsWithChildren } from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import Loading from "./Loading.tsx";

interface IProps {
  loading: boolean;
  startIcon?: JSX.Element;
  tooltipTitle?: string;
  size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function LoadingButton({
  loading,
  children,
  tooltipTitle,
  startIcon,
  size,
  variant,
  onClick,
}: PropsWithChildren<IProps>) {
  return tooltipTitle ? (
    <Tooltip title={tooltipTitle}>
      <Button
        variant={variant}
        disabled={loading}
        startIcon={startIcon}
        size={size}
        onClick={onClick}
        sx={{ m: "auto" }}
      >
        {loading && (
          <Grid sx={{ mr: 1 }}>
            <Loading />
          </Grid>
        )}
        {children}
      </Button>
    </Tooltip>
  ) : (
    <Button
      variant={variant}
      disabled={loading}
      startIcon={startIcon}
      size={size}
      onClick={onClick}
      sx={{ m: "auto" }}
    >
      {loading && (
        <Grid sx={{ mr: 1 }}>
          <Loading />
        </Grid>
      )}
      {children}
    </Button>
  );
}

LoadingButton.defaultProps = {
  startIcon: null,
  tooltipTitle: "",
  size: "medium",
  variant: "contained",
};
