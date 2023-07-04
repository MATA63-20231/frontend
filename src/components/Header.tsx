import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import SearchIcon from "@mui/icons-material/Search";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <Toolbar
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

      <Grid container direction="row" justifyContent="flex-end">
        {/* <Button
          href="/nova-receita"
          sx={{
            bgcolor: "primary.main",
            "&:hover": { bgcolor: "primary.light" },
          }}
          variant="contained"
        >
          Nova receita
        </Button> */}

        {/* Ocultar botão nova receita */}

        {/* <SearchIcon/>

        |
       */}

        <Button
          variant="text"
          disableRipple
          href="login"
          sx={{ textTransform: "Capitalize" }}
        >
          <AccountCircleIcon />
          <Typography color="secondary.main">Login</Typography>
        </Button>
      </Grid>
    </Toolbar>
  );
}
