import ImagesCarousel from "../../ImagesCarousel.tsx";
import CardContent from "@mui/material/CardContent";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  images: File[];
  disabled: boolean;
  setImages: (callbackFn: (previousImages: File[]) => File[]) => void;
}

export default function DragAndDropImagesView({
  images,
  disabled,
  setImages,
}: IProps) {
  const deleteImage = (index: number) => {
    setImages((previousImages: File[]) => {
      const newFiles = [...previousImages];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  return images.length === 0 ? null : (
    <Grid sx={{ mt: 2 }}>
      <ImagesCarousel
        images={images.map((img, id) => {
          return {
            id: String(id),
            link: URL.createObjectURL(img),
            action: (
              <CardContent sx={{ p: "0 !important" }}>
                <Tooltip title="Remover imagem">
                  <IconButton
                    disabled={disabled}
                    onClick={() => deleteImage(id)}>
                    <DeleteIcon color="primary" />
                  </IconButton>
                </Tooltip>
              </CardContent>
            ),
          };
        })}
      />
    </Grid>
  );
}
