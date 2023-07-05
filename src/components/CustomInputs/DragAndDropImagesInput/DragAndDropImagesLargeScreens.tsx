import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FileUploadIcon from "@mui/icons-material/FileUploadOutlined";
import DragAndDropImagesLimitMessages from "./DragAndDropImagesLimitMessages.tsx";

interface IProps {
  label: string;
  disabled: boolean;
  acceptedFileTypesStr: string;
  maxFileSizeMB: number;
  maxFilesAmount: number;
}

export default function DragAndDropImagesLargeScreens({
  label,
  disabled,
  acceptedFileTypesStr,
  maxFileSizeMB,
  maxFilesAmount,
}: IProps) {
  return (
    <Box
      sx={{
        cursor: disabled ? "not-allowed" : "pointer",
        display: { xs: "none", sm: "block" },
        border: "1px dashed #0000003b",
        borderRadius: 3,
        p: 3,
      }}
    >
      <FileUploadIcon color="primary" fontSize="large" />
      <Typography variant="h3" sx={{ fontSize: 20 }}>
        {label}
      </Typography>
      <Typography variant="h4" sx={{ fontSize: 14 }}>
        ou clique para selecionar do dispostiivo
      </Typography>

      <DragAndDropImagesLimitMessages
        acceptedFileTypesStr={acceptedFileTypesStr}
        maxFileSizeMB={maxFileSizeMB}
        maxFilesAmount={maxFilesAmount}
      />
    </Box>
  );
}
