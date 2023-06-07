import CardMedia from "@mui/material/CardMedia";
import Page from "../components/Page.tsx";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem/ListItem";

import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function RecipeView() {
  return (
    <Page title="Título da Receita">
      <Grid>
        <Card sx={{ width: "60%", m: "auto" }}>
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random?wallpapers"
          />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="center"
            alignItems="center"
            sx={{ minWidth: 0 }}
          >
            <Grid item>
              <Grid container sx={{ flexWrap: "nowrap" }}>
                <TimerOutlinedIcon
                  fontSize="small"
                  color="primary"
                  sx={{ mr: 0.5 }}
                />
                <Typography noWrap sx={{ maxWidth: "100%" }}>
                  1h30min
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container sx={{ flexWrap: "nowrap" }}>
                <RamenDiningOutlinedIcon
                  fontSize="small"
                  color="primary"
                  sx={{ mr: 0.5 }}
                />
                <Typography noWrap sx={{ maxWidth: "100%" }}>
                  40 porções
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container sx={{ flexWrap: "nowrap" }}>
                <PersonOutlineOutlinedIcon
                  fontSize="small"
                  color="primary"
                  sx={{ mr: 0.5 }}
                />
                <Typography noWrap sx={{ maxWidth: "100%" }}>
                  Beatriz Cerqueira
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container sx={{ flexWrap: "nowrap" }}>
                <CalendarMonthOutlinedIcon
                  fontSize="small"
                  color="primary"
                  sx={{ mr: 0.5 }}
                />
                <Typography noWrap sx={{ maxWidth: "100%" }}>
                  06/06/2023
                </Typography>
              </Grid>
            </Grid>
          </Stack>

          <Typography variant="h5">Ingredientes</Typography>
        </Card>
      </Grid>
    </Page>
  );
}

// descricao
