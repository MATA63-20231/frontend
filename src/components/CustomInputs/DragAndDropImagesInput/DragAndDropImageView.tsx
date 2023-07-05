import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  index: number;
  image: File;
  disabled: boolean;
  setImages: Dispatch<SetStateAction<File[]>>;
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
    return () => URL.revokeObjectURL(objectUrl); // Free memory when ever this component is unmounted
  }, [image]);

  const deleteImage = (index: number) => {
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
        <IconButton disabled={disabled} onClick={() => deleteImage(index)}>
          <DeleteIcon color="primary" />
        </IconButton>
      </CardContent>
      <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        <img src={imageURL} />
      </Dialog>
    </>
  );
}
