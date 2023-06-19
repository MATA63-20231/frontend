import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";

interface PageProps {
  title?: string;
  pretitle?: string;
}

export default function Page({
  title,
  pretitle,
  children,
}: PropsWithChildren<PageProps>) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        margin: "0 auto",
        py: 4,
      }}
    >
      <Typography variant="h2">{pretitle}</Typography>
      <Typography variant="h1" sx={{ pb: 3 }}>
        {title}
      </Typography>
      {children}
    </Container>
  );
}

Page.defaultProps = { title: "", pretitle: "" };
