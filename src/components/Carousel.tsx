import Carousel from "react-material-ui-carousel";
import { Button, CardMedia } from "@mui/material";
import { IImage } from "../interfaces/RecipeInterfaces.tsx";
import NoImage from "../assets/noimage.svg";
import { getImage } from "../services/RecipesApi.tsx";
import { useState } from "react";

interface IProps {
  images: IImage[];
}

export default function ImagesCarousel({ images }: IProps) {
  const hasMultipleImages = images.length > 1;
  const [loading, setLoading] = useState<boolean>(false);

  const img = getImage;

  // "6fae721e-ad72-46cb-bf30-a0621cf7b055"

  return images.length ? (
    <Carousel
      navButtonsAlwaysVisible={hasMultipleImages}
      navButtonsAlwaysInvisible={!hasMultipleImages}
      indicators={hasMultipleImages}
    >
      {images.map((img) => (
        <>
          <CardMedia
            key={img.id}
            component="img"
            image={`https://picsum.photos/500/200?random=${img.ordem}`}
            // image={img.nome}  // TODO: Implementar quando houver requisição de imagem
            sx={{ height: "400px" }}
          />

          <Button onClick={() => console.log(getImage(img.id, setLoading))}>
            {" "}
            aaa{" "}
          </Button>
        </>
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
