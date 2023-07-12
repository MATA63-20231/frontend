import Carousel from "react-material-ui-carousel";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { IImageCarousel } from "../interfaces/RecipeInterfaces.tsx";
import NoImage from "../assets/noimage.svg";

interface IProps {
  images: IImageCarousel[];
}

export default function ImagesCarousel({ images }: IProps) {
  const hasImages = images.length;
  const hasMultipleImages = images.length > 1;

  return hasImages ? (
    <Carousel
      navButtonsAlwaysVisible={hasMultipleImages}
      navButtonsAlwaysInvisible={!hasMultipleImages}
      indicators={hasMultipleImages}
    >
      {images.map((img) => (
        <Grid key={img.id}>
          <CardMedia
            component="img"
            image={img.link}
            sx={{
              height: "400px",
              width: "auto",
              mx: "auto",
            }}
          />
          {img.action}
        </Grid>
      ))}
    </Carousel>
  ) : (
    <CardMedia
      component="img"
      image={NoImage}
      sx={{
        width: "20%",
        margin: "auto",
        py: 12,
      }}
    />
  );
}
