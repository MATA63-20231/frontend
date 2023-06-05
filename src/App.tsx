import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid/Grid";
import createTheme from "@mui/material/styles/createTheme";

import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Blog from "./Blog.tsx";

function App() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Header />

      <Grid sx={{ minHeight: "80vh", bgcolor: "#212529" }}>
        <Blog />
      </Grid>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
