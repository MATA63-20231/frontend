import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Person } from "@mui/icons-material";
import { Grid, ListItem, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  const RecipeCreation = () => {
    navigate("/nova-receita");
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Minha conta">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={isMenuOpen ? "account-menu" : undefined}
            aria-expanded={isMenuOpen ? "true" : undefined}
            aria-haspopup="true"
          >
            <AccountCircleIcon fontSize="large" color="primary" />
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={isMenuOpen}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <ListItem sx={{ pt: 0 }}>
          <Grid sx={{ width: "100%" }}>
            <Typography
              color="primary"
              sx={{
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Minha conta
            </Typography>
          </Grid>
        </ListItem>
        <Divider />
        <MenuItem onClick={RecipeCreation}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          Cadastrar receita
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
}
