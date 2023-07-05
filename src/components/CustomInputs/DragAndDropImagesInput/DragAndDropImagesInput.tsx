import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { FileUploader } from "react-drag-drop-files";
import Box from "@mui/material/Box";
import DragAndDropImagesLargeScreens from "./DragAndDropImagesLargeScreens";
import DragAndDropImagesSmallScreens from "./DragAndDropImagesSmallScreens";
import DragAndDropImagesView from "./DragAndDropImagesView";

export default function DragAndDropImagesInput() {
  const [images, setImages] = useState<File[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  const acceptedTypes = ["JPG", "JPEG", "PNG", "GIF", "SVG"];
  const acceptedTypesStr = acceptedTypes.join(", ");
  const maxSizeMB = 3;
  const maxSize = maxSizeMB * 1000 * 1024;
  const maxFiles = 10;

  const handleChange = (newfiles: File[]) => {
    console.log(newfiles);
    setImages((previousFiles) => [...previousFiles, ...newfiles]);
  };

  const handleTypeError = () => {
    enqueueSnackbar({
      variant: "error",
      message:
        `Tipo de arquivo não permitido. Tipos permitidos: ${acceptedTypesStr}.`,
    });
  };


  const handleSizeError = () => {
    enqueueSnackbar({
      variant: "error",
      message:
        `Tamanho máximo do arquivo excedido. Tamanho máximo: ${maxSizeMB}MB.`,
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#eeeeee",
        border: "1px dashed gray",
        borderRadius: 3,
        p: 4,
        mx: 2,
      }}
    >
      <FileUploader
        multiple
        name="file"
        disabled={disabled}
        fileOrFiles={images}
        types={acceptedTypes}
        maxSize={maxSizeMB}
        onTypeError={handleTypeError}
        onSizeError={handleSizeError}
        handleChange={handleChange}
      >
        <DragAndDropImagesLargeScreens
          disabled={disabled}
          acceptedTypes={acceptedTypesStr}
          maxSizeMB={maxSizeMB}
          maxFiles={maxFiles}
        />
        <DragAndDropImagesSmallScreens
          disabled={disabled}
          acceptedTypes={acceptedTypesStr}
          maxSizeMB={maxSizeMB}
          maxFiles={maxFiles}
        />
      </FileUploader>

      <DragAndDropImagesView disabled={disabled} images={images} setImages={setImages} />
    </Box>
  );
}
