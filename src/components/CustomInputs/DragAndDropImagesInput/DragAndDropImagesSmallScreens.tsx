import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DragAndDropImagesLimitMessages from "./DragAndDropImagesLimitMessages";

interface IProps {
  disabled: boolean;
  acceptedFileTypesStr: string;
  maxFileSizeMB: number;
  maxFilesAmount: number;
}

export default function DragAndDropImagesSmallScreens({
  disabled,
  acceptedFileTypesStr,
  maxFileSizeMB,
  maxFilesAmount,
}: IProps) {
  return (
    <Grid
      container
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Button variant="outlined" disabled={disabled}>
        Anexar imagens
      </Button>
      <DragAndDropImagesLimitMessages
        acceptedFileTypesStr={acceptedFileTypesStr}
        maxFileSizeMB={maxFileSizeMB}
        maxFilesAmount={maxFilesAmount}
      />
    </Grid>
  );
}
