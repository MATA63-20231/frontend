import Carousel from "react-material-ui-carousel";
import { CardMedia } from "@mui/material";
import { IImage } from "../interfaces/RecipeInterfaces.tsx";
import NoImage from "../assets/noimage.svg";

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
          image={`https://picsum.photos/500/200?random=${img.ordem}`}
          // image={img.nome}  // TODO: Implementar quando houver requisição de imagem
          sx={{ height: "400px" }}
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
