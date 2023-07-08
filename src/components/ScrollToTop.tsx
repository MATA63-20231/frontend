import { MouseEvent } from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

export default function ScrollToTop() {
  const trigger = useScrollTrigger();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Tooltip title="Voltar para o topo">
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <Fab size="small" aria-label="Voltar para o topo">
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Tooltip>
    </Fade>
  );
}
