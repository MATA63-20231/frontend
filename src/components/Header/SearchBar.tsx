import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getRecipesSearch } from "../../services/RecipesApi";
import { useState } from "react";
import { IRecipe } from "../../interfaces/RecipeInterfaces";
import { useNavigate } from "react-router-dom";

// import SearchBar from "material-ui-search-bar"; //material-ui-search-bar

export default function SearchBarComponent() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<String>("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/receita/busca/${value}`);
    getRecipesSearch(value, setLoading, setRecipes);
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
