import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { PropsWithChildren } from "react";
import Loading from "./Loading";

interface PageProps {
  title?: string;
  pretitle?: string;
  loading?: boolean;
}

export default function Page({
  title,
  pretitle,
  loading,
  children,
}: PropsWithChildren<PageProps>) {
  return loading ? (
    <Loading />
  ) : (
    <Container
      maxWidth="lg"
      sx={{
        margin: "0 auto",
        py: 4,
      }}>
      <Typography variant="h2">{pretitle}</Typography>
      <Typography variant="h1" sx={{ pb: 3 }}>
        {title}
      </Typography>
      {children}
    </Container>
  );
}

Page.defaultProps = { title: "", pretitle: "", loading: false };
