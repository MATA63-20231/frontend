import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface IProps {
  acceptedFileTypesStr: string;
  maxFileSizeMB: number;
  maxFilesAmount: number;
}

export default function DragAndDropImagesLimitMessages({
  acceptedFileTypesStr,
  maxFileSizeMB,
  maxFilesAmount,
}: IProps) {
  const limitMessages = [
    `Tipos de arquivo permitidos: ${acceptedFileTypesStr}.`,
    `Tamanho máximo por arquivo: ${maxFileSizeMB}MB.`,
    `Quantidade máxima de arquivos: ${maxFilesAmount}.`,
  ];

  return (
    <Grid sx={{ mt: 2 }}>
      {limitMessages.map((limitMessage) => (
        <Typography key={limitMessage} sx={{ fontSize: 10, lineHeight: 1.3 }}>
          {limitMessage}
        </Typography>
      ))}
    </Grid>
  );
}
