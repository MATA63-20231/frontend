import { PropsWithChildren, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { IRouteAuthRules } from "../../interfaces/AuthInterfaces.tsx";
import RouteAuthRules from "../../enums/RouteAuthRules.tsx";
import Loading from "../Loading.tsx";
import BackToPreviousPage from "./BackToPreviousPage.tsx";
import ScrollToTop from "./ScrollToTop.tsx";
import AuthContext from "../../contexts/AuthContext.tsx";

interface IProps {
  title: string | undefined;
  pretitle: string | undefined;
  authRule: IRouteAuthRules;
  loading?: boolean;
}

export default function Page({
  title,
  pretitle,
  authRule,
  loading,
  children,
}: PropsWithChildren<IProps>) {
  const navigate = useNavigate();
  const { signedIn, isTheSameUser } = useContext(AuthContext);

  useEffect(() => {
    if (signedIn !== null) {
      switch (authRule.rule) {
      case RouteAuthRules.SIGNED_ONLY: {
        if (!signedIn) {
          navigate("/login");
        }
        break;
      }

      case RouteAuthRules.NO_SIGNED_ONLY: {
        if (signedIn) {
          navigate("/");
        }
        break;
      }

      case RouteAuthRules.SAME_USER_ONLY: {
        if (authRule.userId && !isTheSameUser(authRule.userId)) {
          navigate(authRule.redirectTo);
        }
        break;
      }

      default: {
        break;
      }
      }
    }
  }, [signedIn, authRule, isTheSameUser, navigate]);

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

Page.defaultProps = { loading: false };
