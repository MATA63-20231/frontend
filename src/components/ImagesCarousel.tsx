import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { IImageCarousel } from "../interfaces/RecipeInterfaces.tsx";
import NoImage from "../assets/noimage.svg";

interface IProps {
  images: IImageCarousel[];
}

export default function ImagesCarousel({ images }: IProps) {
  const [hasImages] = useState(images.length);
  const [hasMultipleImages] = useState(images.length > 1);

  return hasImages ? (
    <Carousel
      navButtonsAlwaysVisible={hasMultipleImages}
      navButtonsAlwaysInvisible={!hasMultipleImages}
      indicators={hasMultipleImages}
    >
      {images.map((img) => (
        <Grid
          container
          key={img.id}
          sx={{
            border: "1px dashed #0000003b",
            borderRadius: 3,
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "#dddd",
          }}
        >
          <Grid
            container
            sx={{
              bgcolor: "#eeeeee",
              height: "400px",
              borderRadius: "16px 16px 0px  0px",
            }}
          >
            <CardMedia
              component="img"
              image={img.link}
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                height: "auto",
                width: "auto",
                m: "auto",
              }}
            />
          </Grid>
          <Grid>{img.action}</Grid>
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
