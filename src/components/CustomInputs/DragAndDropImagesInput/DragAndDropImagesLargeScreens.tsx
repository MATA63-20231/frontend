import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FileUploadIcon from "@mui/icons-material/FileUploadOutlined";
import DragAndDropImagesLimitMessages from "./DragAndDropImagesLimitMessages";

interface IProps {
  disabled: boolean;
  acceptedTypes: string;
  maxSizeMB: number;
  maxFiles: number;
}

export default function DragAndDropImagesLargeScreens({
  disabled,
  acceptedTypes,
  maxSizeMB,
  maxFiles,
}: IProps) {
  return (
    <Box
      sx={{
        cursor: disabled ? "not-allowed" : "pointer",
        display: { xs: "none", sm: "block" },
        border: "1px dashed #0000003b",
        borderRadius: 3,
        p: 3,
      }}>
      <FileUploadIcon color="primary" fontSize="large" />
      <Typography variant="h3" sx={{ fontSize: 20 }}>
        Arraste e solte as fotos da sua receita aqui
      </Typography>
      <Typography variant="h4" sx={{ fontSize: 14 }}>
        ou clique para selecionar do dispostiivo
      </Typography>

      <DragAndDropImagesLimitMessages
        acceptedTypes={acceptedTypes}
        maxSizeMB={maxSizeMB}
        maxFiles={maxFiles}
      />
    </Box>
  );
}
