import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getRecipesSearch } from "../../services/RecipesApi";
import { useState } from "react";
import { IRecipe } from "../../interfaces/RecipeInterfaces";

// import SearchBar from "material-ui-search-bar"; //material-ui-search-bar

export default function SearchBarComponent() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<String>("");

  const handleSubmit = () => {
    console.log("search", value, typeof value);
    getRecipesSearch(value, setLoading, setRecipes);
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      <TextField
        id="search-bar"
        variant="outlined"
        placeholder="Pesquisar..."
        size="small"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <IconButton type="submit" aria-label="search"> */}
      <IconButton onClick={handleSubmit} aria-label="search">
        <SearchIcon sx={{ color: "primary.main" }} />
      </IconButton>
      {/* </form> */}
    </>
  );
}
