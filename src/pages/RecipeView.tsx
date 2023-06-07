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

export default function RecipeView() {
  return (
    <Page title="Título da Receita">
      <Grid>
        <Card sx={{ width: "60%", m: "auto" }}>
          <CardMedia
            component="img"
            image="https://source.unsplash.com/random?wallpapers"
          />
          <List
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              justifyItems: "center",
              flexDirection: {xs: "column", md:"row"},
              width: "100%",
            }}
          >
            <ListItem
              sx={{
                px: 1,
                width: "min-content",
                maxWidth:"25%",
                textOverflow:"ellipsis",
                overflow:"hidden",
                whiteSpace:"nowrap"
              }}
            >
              <TimerOutlinedIcon
                fontSize="small"
                color="primary"
                sx={{ mr: 0.5 }}
              />
              1h30min
            </ListItem>
            <ListItem
              sx={{
                px: 1,
                width: "min-content",
                maxWidth:"25%",
                textOverflow:"ellipsis",
                overflow:"hidden",
                whiteSpace:"nowrap"
              }}
            >
              <RamenDiningOutlinedIcon
                fontSize="small"
                color="primary"
                sx={{ mr: 0.5 }}
              />
              40 porções
            </ListItem>
            <ListItem
              sx={{
                px: 1,
                width: "min-content",
                maxWidth:"25%",
                textOverflow:"ellipsis",
                overflow:"hidden",
                whiteSpace:"nowrap"
              }}
            >
              <PersonOutlineOutlinedIcon
                fontSize="small"
                color="primary"
                sx={{ mr: 0.5 }}
              />
              Beatriz Cerqueira
            </ListItem>
            <ListItem
              sx={{
                px: 1,
                width: "min-content",
                maxWidth:"25%",
                textOverflow:"ellipsis",
                overflow:"hidden",
                whiteSpace:"nowrap"
              }}
            >
              <CalendarMonthOutlinedIcon
                fontSize="small"
                color="primary"
                sx={{ mr: 0.5 }}
              />
              06/06/2023
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Page>
  );
}

// titulo
// descricao
// rendimento
// tempopreparo
// imagem
// dataCadastro
