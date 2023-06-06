import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Page from "../components/Page.tsx";

const cards = [1, 2, 3];

export default function Home() {
  return (
    <Page>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  // 16:9
                  pt: "56.25%",
                }}
                image="https://source.unsplash.com/random?wallpapers"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Título
                </Typography>
                <Typography>Descrição</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Ver</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}
