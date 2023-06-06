import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
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
          <Typography
            sx={{
              whiteSpace: "nowrap",
              fontFamily: "Inter",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            Yummy
          </Typography>
          <Typography
            sx={{
              color: "#CE1212",
              fontFamily: "Inter",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            .
          </Typography>
        </Grid>
      </Link>

      <Grid container direction="row" justifyContent="flex-end">
        <Button
          href="/nova-receita"
          sx={{
            bgcolor: "#CE1212",
            "&:hover": { bgcolor: "#ce1212cc" },
          }}
          variant="contained"
        >
          Nova receita
        </Button>
      </Grid>
    </Toolbar>
  );
}
