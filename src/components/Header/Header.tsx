import { useContext } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../assets/logo.svg";
import AccountMenu from "./AccountMenu.tsx";
import AuthContext from "../../contexts/AuthContext.tsx";

export default function Header() {
  const { signed } = useContext(AuthContext);

  return (
    <Toolbar
      id="back-to-top-anchor"
      component="nav"
      sx={{
        py: 3,
        justifyContent: "space-between",
        overflowX: "auto",
      }}
    >
      <Link href="/" sx={{ color: "inherit", textDecoration: "none" }}>
        <Grid
          container
          direction="row"
          sx={{ flexWrap: "nowrap", alignItems: "center" }}
        >
          <CardMedia
            sx={{ height: "100%", width: "35px", mr: 1.5 }}
            component="img"
            image={Logo}
            title="Chef Virtual"
          />
          <Typography variant="mainTitle">Chef Virtual</Typography>
          <Typography variant="mainTitle" sx={{ color: "primary.main" }}>
            .
          </Typography>
        </Grid>
      </Link>

      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Grid item>
          {!signed && (
            <Button
              variant="outlined"
              href="login"
              startIcon={<AccountCircleIcon color="primary" />}
              sx={{ mr: 2, color: "secondary.main" }}
            >
              Login
            </Button>
          )}
        </Grid>

        <Grid item>
          <Button href="/nova-receita" variant="contained">
            Nova receita
          </Button>
        </Grid>

        <Grid item>{signed && <AccountMenu />}</Grid>
      </Grid>
    </Toolbar>
  );
}
