import { PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Loading from "./Loading.tsx";
import BackToPreviousPage from "./BackToPreviousPage.tsx";
import ScrollToTop from "./ScrollToTop.tsx";

interface IProps {
  title?: string;
  pretitle?: string;
  loading?: boolean;
}

export default function Page({
  title,
  pretitle,
  loading,
  children,
}: PropsWithChildren<IProps>) {
  return (
    <>
      <Grid container flexDirection="column">
        <BackToPreviousPage />
        <Container
          maxWidth="lg"
          sx={{
            margin: "0 auto",
            pb: 4,
          }}
        >
          <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
            {pretitle}
          </Typography>
          <Typography variant="h1" sx={{ pb: 3 }}>
            {title}
          </Typography>
          {loading ? <Loading /> : children}
        </Container>
      </Grid>
      <ScrollToTop />
    </>
  );
}

Page.defaultProps = { title: "", pretitle: "", loading: false };
