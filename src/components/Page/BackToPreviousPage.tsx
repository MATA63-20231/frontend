import { useNavigate } from "react-router-dom";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";

export default function BackToPreviousPage() {
  const navigate = useNavigate();

  const handleClick = () => { navigate(-1); };

  return (
    <Tooltip title="Voltar para a página anterior">
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ mt: 1, ml: 2, alignSelf: "flex-start" }}
      >
        <Fab size="small" aria-label="Voltar para  a página anterior">
          <KeyboardArrowLeftIcon />
        </Fab>
      </Box>
    </Tooltip>
  );
}
