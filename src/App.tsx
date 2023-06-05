import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid/Grid";
import createTheme from "@mui/material/styles/createTheme";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import RecipeCreation from "./pages/RecipeCreation.tsx";

function App() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Header />

      <Grid sx={{ minHeight: "80vh", bgcolor: "#212529" }}>
        <RecipeCreation />
      </Grid>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
