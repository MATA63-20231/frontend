import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import TimerIcon from "@mui/icons-material/TimerOutlined";
import RamenDiningIcon from "@mui/icons-material/RamenDiningOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonthOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Page from "../components/Page.tsx";
import RouteAuthRules from "../enums/RouteAuthRules.tsx";
// import { useEffect, useState } from "react";
// import { getRecipeDetails } from "../services/Api.tsx";
// import { IRecipe } from "../interfaces/interfaces.tsx";

// TODO: Componentizar rs
// TODO: Avaliação e comentários
export default function RecipeView() {
  // const [recipe, setRecipe] = useState<IRecipe>();

  // useEffect(() => {
  //   getRecipeDetails().then(({ data }) => {
  //     setRecipe(data);
  //   });
  // }, []);

  return (
    <Page
      title="Título da Receita"
      pretitle="Confira esta receita"
      authRule={{ rule: RouteAuthRules.NO_RULE }}
    >
      <Grid container sx={{ m: "0 auto", maxWidth: "700px" }}>
        <Card>
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random?wallpapers"
          />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 0.5, md: 1 }}
            sx={{
              px: 1,
              py: 2,
            }}
          >
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 0,
                width: "100%",
              }}
            >
              <TimerIcon fontSize="small" color="primary" />
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                1h30min
              </Typography>
            </Stack>
            <Divider
              orientation="vertical"
              sx={{ borderColor: "primary.light" }}
              flexItem
            />
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 0,
                width: "100%",
              }}
            >
              <RamenDiningIcon fontSize="small" color="primary" />
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                40 porções
              </Typography>
            </Stack>
            <Divider
              orientation="vertical"
              sx={{ borderColor: "primary.light" }}
              flexItem
            />
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 0,
                width: "100%",
              }}
            >
              <PersonOutlinedIcon fontSize="small" color="primary" />
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                Beatriz Cerqueira
              </Typography>
            </Stack>
            <Divider
              orientation="vertical"
              sx={{ borderColor: "primary.light" }}
              flexItem
            />
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 0,
                width: "100%",
              }}
            >
              <CalendarMonthIcon fontSize="small" color="primary" />
              <Typography
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                06/06/2023
              </Typography>
            </Stack>
          </Stack>

          <Grid
            container
            direction="column"
            alignItems="flex-start"
            sx={{ p: 2 }}
          >
            <Grid item>
              <Typography variant="h6">Ingredientes</Typography>

              <List>
                <ListItem>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="item 2" />
                </ListItem>
              </List>
            </Grid>

            <Grid item>
              <Typography variant="h6">Modo de preparo</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="item 1" secondary="desc item 1" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="item 2" secondary="desc item 2" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Page>
  );
}

// descricao
