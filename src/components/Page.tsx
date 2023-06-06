import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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
    <Container
      maxWidth="lg"
      sx={{
        margin: "0 auto",
        py: 4
      }}>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h2">{subtitle}</Typography>
      {children}
    </Container>
  );
}
