import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface IProps {
  acceptedTypes: string;
  maxSizeMB: number;
  maxFiles: number;
}

export default function DragAndDropImagesLimitMessages({
  acceptedTypes,
  maxSizeMB,
  maxFiles,
}: IProps) {
  const limitMessages = [
    `Tipos de arquivo permitidos: ${acceptedTypes}.`,
    `Tamanho máximo por arquivo: ${maxSizeMB}MB.`,
    `Quantidade máxima de arquivos: ${maxFiles}.`,
  ];

  return (
    <Grid sx={{mt:2}}>
      {limitMessages.map((limitMessage) => (
        <Typography key={limitMessage} sx={{ fontSize: 10, lineHeight: 1.3 }}>
          {limitMessage}
        </Typography>
      ))}
    </Grid>
  );
}
