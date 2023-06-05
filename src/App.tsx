import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid/Grid";
import createTheme from "@mui/material/styles/createTheme";

import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const defaultTheme = createTheme();
  return (
      <ThemeProvider theme={defaultTheme}>
          <CssBaseline />

          <Header />

          <Grid sx={{ minHeight: "80vh", bgcolor: "#212529" }}>
              <Outlet />
          </Grid>

          <Footer />
      </ThemeProvider>
  );
}

export default App;
