import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

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
      <Grid>
        <Typography variant="h4">Chef Virtual</Typography>
      </Grid>
      <Button
        href="/nova-receita"
        sx={{
          bgcolor: "#ce1212",
          "&:hover": { bgcolor: "#ce1212cc" },
        }}
        variant="contained"
      >
        Nova receita
      </Button>
    </Toolbar>
  );
}
