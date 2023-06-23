import { MouseEventHandler, PropsWithChildren } from "react";
import Button from "@mui/material/Button";
import Loading from "./Loading";
import Grid from "@mui/material/Grid";

interface IProps {
  loading: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function LoadingButton({
  loading,
  children,
  onClick,
}: PropsWithChildren<IProps>) {
  return (
    <Button variant="contained" disabled={loading} onClick={onClick}>
      <Grid sx={{ mr: 1 }}>{loading && <Loading />}</Grid> {children}
    </Button>
  );
}
