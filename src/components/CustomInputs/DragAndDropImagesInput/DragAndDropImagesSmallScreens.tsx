import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DragAndDropImagesLimitMessages from "./DragAndDropImagesLimitMessages";

interface IProps {
  disabled: boolean;
  acceptedTypes: string;
  maxSizeMB: number;
  maxFiles: number;
}

export default function DragAndDropImagesSmallScreens({
  disabled,
  acceptedTypes,
  maxSizeMB,
  maxFiles,
}: IProps) {
  return (
    <Grid
      container
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Button variant="outlined" disabled={disabled}>Anexar imagens</Button>
      <DragAndDropImagesLimitMessages
        acceptedTypes={acceptedTypes}
        maxSizeMB={maxSizeMB}
        maxFiles={maxFiles}
      />
    </Grid>
  );
}
