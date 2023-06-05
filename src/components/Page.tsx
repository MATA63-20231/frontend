import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
  subtitle?: string;
}

export default function Page({
  title,
  subtitle,
  children,
}: PropsWithChildren<PageProps>) {
  return (
    <Grid
      sx={{
        bgcolor: "red",
        minHeight: "80vh",
        width: "80%",
        margin: "0 auto",
      }}>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h2">{subtitle}</Typography>
      {children}
    </Grid>
  );
}
