import { useEffect, useState } from "react";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  index: number;
  image: File;
  disabled: boolean;
  setImages: (callbackFn: (previousImages: File[]) => File[]) => void;
}

export default function DragAndDropImageView({
  index,
  image,
  disabled,
  setImages,
}: IProps) {
  const [imageURL, setImageURL] = useState<string>("");
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const objectUrl = URL.createObjectURL(image);
    setImageURL(objectUrl);
    return () => URL.revokeObjectURL(objectUrl); // Free memory whenever this component is unmounted
  }, [image]);

  const deleteImage = () => {
    setImages((previousImages: File[]) => {
      const newFiles = [...previousImages];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  return (
    <>
      <CardActionArea onClick={() => setDialogOpen(true)}>
        <CardMedia
          component="div"
          sx={{
            pt: "56.25%",
          }}
          image={imageURL}
        />
      </CardActionArea>
      <CardContent sx={{ p: "0 !important" }}>
        <IconButton disabled={disabled} onClick={deleteImage}>
          <DeleteIcon color="primary" />
        </IconButton>
      </CardContent>
      <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        <img src={imageURL} alt="Foto da receita" />
      </Dialog>
    </>
  );
}
