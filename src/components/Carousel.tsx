import Carousel from "react-material-ui-carousel";
import { CardMedia } from "@mui/material";
import { IImage } from "../interfaces/RecipeInterfaces.tsx";
import NoImage from "../assets/noimage.svg";
import env from "../config/env.tsx";

interface IProps {
  images: IImage[];
}

export default function ImagesCarousel({ images }: IProps) {
  const hasMultipleImages = images.length > 1;

  return images.length ? (
    <Carousel
      navButtonsAlwaysVisible={hasMultipleImages}
      navButtonsAlwaysInvisible={!hasMultipleImages}
      indicators={hasMultipleImages}
    >
      {images.map((img) => (
        <CardMedia
          key={img.id}
          component="img"
          image={`${env.baseUrl}imagem/${img.id}`}
          sx={{
            height: "400px", width: "auto", mx: "auto", p: 5,
          }} // TODO ajustar imagem
        />
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
