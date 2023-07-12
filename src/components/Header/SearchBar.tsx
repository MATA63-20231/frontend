import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import SearchBar from "material-ui-search-bar"; //material-ui-search-bar

export const SearchBarComponent = () => (
  <form>
    <TextField
      id="search-bar"
      variant="outlined"
      placeholder="Pesquisar..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>

  // <SearchBar
  // // value={this.state.value}
  // // onChange={(newValue) => this.setState({ value: newValue })}
  // // onRequestSearch={() => doSomethingWith(this.state.value)}
  // onChange={() => {
  //   console.log("search");
  // }}
  // />
);
