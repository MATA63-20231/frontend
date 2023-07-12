import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBarComponent() {
  const [value, setValue] = useState<String>("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/receita/busca/${value}`);
    setValue("");
  };

  return (
    <>
      <TextField
        id="search-bar"
        variant="outlined"
        placeholder="Pesquisar..."
        size="small"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton onClick={handleSubmit} aria-label="search">
        <SearchIcon sx={{ color: "primary.main" }} />
      </IconButton>
    </>
  );
}
