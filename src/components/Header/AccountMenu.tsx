import { useState, MouseEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import AuthContext from "../../contexts/AuthContext.tsx";

export default function AccountMenu() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    handleLogout();
    enqueueSnackbar({
      variant: "success",
      message: "Você foi deslogado com sucesso!",
    });
  };

  const navigateToMyRecipes = () => {
    // TODO: link correto
    navigate("/");
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Minha conta">
          <IconButton
            sx={{ p: 0, ml: 2, my: -1 }}
            onClick={handleClick}
            aria-controls={isMenuOpen ? "account-menu" : undefined}
            aria-expanded={isMenuOpen ? "true" : undefined}
            aria-haspopup="true"
          >
            <AccountCircleIcon sx={{ fontSize: 48 }} color="primary" />
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
        <MenuItem onClick={navigateToMyRecipes}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Minhas receitas
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
}
